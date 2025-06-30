import React from 'react';

const projectMarkdownFiles = {
  0: [ // Deep Fake Detection
    {
      name: 'Deepfake_README.md',
      title: 'Main Documentation',
      path: `${process.env.PUBLIC_URL}/docs/Deepfake_README.md`
    }
  ],
  1: [ // Blockchain
    {
      name: 'TokenLand_Documentation.md',
      title: 'TokenLand Documentation',
      path: `${process.env.PUBLIC_URL}/docs/TokenLand_Documentation.md`
    }
  ],
  3: [ // Real-Time Threat Intelligence System
    {
      name: 'README.md',
      title: 'Project Overview',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/README.md`
    },
    {
      name: 'system_walkthrough.markdown',
      title: 'System Walkthrough',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/system_walkthrough.markdown`
    },
    {
      name: 'tech_stack.md',
      title: 'Technology Stack',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/tech_stack.md`
    },
    {
      name: 'security_audit.md',
      title: 'Security Audit',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/security_audit.md`
    },
    {
      name: 'system_manual.md',
      title: 'System Manual',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/system_manual.md`
    },
    {
      name: 'user_guide.md',
      title: 'User Guide',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/user_guide.md`
    },
    {
      name: 'nist_framework_summary.md',
      title: 'NIST Framework Summary',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/nist_framework_summary.md`
    },
    {
      name: 'api_research.md',
      title: 'API Research',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/api_research.md`
    },
    {
      name: 'osint_framework.md',
      title: 'OSINT Framework',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/osint_framework.md`
    },
    {
      name: 'security_validation.md',
      title: 'Security Validation',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/security_validation.md`
    },
    {
      name: 'deployment_checklist.md',
      title: 'Deployment Checklist',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/deployment_checklist.md`
    },
    {
      name: 'troubleshooting_guide.md',
      title: 'Troubleshooting Guide',
      path: `${process.env.PUBLIC_URL}/docs/cybersecurity/troubleshooting_guide.md`
    }
  ]
};

function MarkdownFileList({ projectIndex, onFileSelect, onClose }) {
  const files = projectMarkdownFiles[projectIndex] || [];

  const handleFileClick = (file) => {
    onFileSelect(file);
  };

  if (files.length === 0) {
    return (
      <div className="markdown-file-list">
        <div className="file-list-header">
          <h4>Documentation</h4>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <p className="no-docs">No documentation available for this project.</p>
      </div>
    );
  }

  return (
    <div className="markdown-file-list">
      <div className="file-list-header">
        <h4>Documentation Files</h4>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="file-list">
        {files.map((file, index) => (
          <div
            key={index}
            className="file-item"
            onClick={() => handleFileClick(file)}
          >
            <div className="file-icon">📄</div>
            <div className="file-info">
              <div className="file-title">{file.title}</div>
              <div className="file-name">{file.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarkdownFileList; 