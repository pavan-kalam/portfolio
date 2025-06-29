import React, { useState, useEffect } from 'react';

function MarkdownViewer({ file, onClose }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (file) {
      fetchMarkdownContent(file.path);
    }
  }, [file]);

  const fetchMarkdownContent = async (filePath) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filePath}`);
      }
      const text = await response.text();
      setContent(text);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderMarkdown = (markdown) => {
    // Basic markdown rendering - convert common markdown elements to HTML
    let html = markdown
      // Headers
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Line breaks
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br/>');

    // Wrap in paragraphs
    html = '<p>' + html + '</p>';
    
    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p><br\/><\/p>/g, '');

    return html;
  };

  if (!file) return null;

  return (
    <div className="markdown-viewer-overlay" onClick={onClose}>
      <div className="markdown-viewer" onClick={(e) => e.stopPropagation()}>
        <div className="markdown-viewer-header">
          <h3>{file.title}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="markdown-viewer-content">
          {loading && <div className="loading">Loading...</div>}
          {error && <div className="error">Error: {error}</div>}
          {!loading && !error && (
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MarkdownViewer; 