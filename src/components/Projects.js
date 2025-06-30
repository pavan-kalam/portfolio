import React, { useState } from 'react';
import { FaBrain, FaEthereum, FaRobot, FaShieldAlt } from 'react-icons/fa';
import MarkdownFileList from './MarkdownFileList';
import MarkdownViewer from './MarkdownViewer';

const projects = [
  {
    title: 'Deep Fake Detection Using CNN',
    description: 'Developed a convolution Neural Network (CNN) based project to identify AI-generated or edited images, enhancing digital content authenticity. Focused on image processing and deep learning techniques for robust detection.',
    icon: <FaBrain />,
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    image: `${process.env.PUBLIC_URL}/project_images/deepfake_cnn.png`,
  },
  {
    title: 'Blockchain-Based Real Estate Management System',
    description: 'Designed and implemented a secure real estate management system leverage blockchain technology. Enabled all real estate transactions to be conducted using Ethereum coins, ensuring transparency and immutability.',
    icon: <FaEthereum />,
    background: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
    image: `${process.env.PUBLIC_URL}/project_images/blockchain.png`,
  },
  {
    title: 'AI Call Agent With RAG Strategy',
    description: 'Created an AI Call Agent capable of interacting with callers naturally. Implemented a Retrieval-Augmented Generation (RAG) strategy within an Agentic AI system to process queries and identify important calls, forwarding them automatically to the user when necessary.',
    icon: <FaRobot />,
    background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
    image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=AI+Agent+Architecture',
  },
  {
    title: 'Real-Time Threat Intelligence System',
    description: 'Developed a cybersecurity project focused on real-time threat intelligence for organization security. Utilized OSINT tools to monitor threats and integrated Machine Learning models to accelerate the threat mitigation process.',
    icon: <FaShieldAlt />,
    background: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
    image: `${process.env.PUBLIC_URL}/project_images/security_project.png`,
  },
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleCloseViewer = () => {
    setSelectedFile(null);
  };

  const handleCloseFileList = () => {
    setHoveredProject(null);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ background: project.background }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img src={project.image} alt={project.title} className="project-visual" />
            <div className="project-card-content">
              {project.icon}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            {hoveredProject === index && (
              <MarkdownFileList
                projectIndex={index}
                onFileSelect={handleFileSelect}
                onClose={handleCloseFileList}
              />
            )}
          </div>
        ))}
      </div>
      
      {selectedFile && (
        <MarkdownViewer
          file={selectedFile}
          onClose={handleCloseViewer}
        />
      )}
    </section>
  );
}

export default Projects;
