import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-intro">
            <h1 className="about-name">Pavan Kalam</h1>
            <h2 className="about-title">Computer Science Specialist with Data Analysis Expertise</h2>
            <div className="about-divider"></div>
          </div>
          
          <div className="about-description">
            <p className="about-summary">
              Passionate Computer Science professional with expertise in cybersecurity, machine learning, 
              and blockchain technology. Experienced in developing innovative solutions for real-world problems, 
              from deepfake detection systems to blockchain-based real estate management platforms.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-grid">
                <div className="highlight-item">
                  <div className="highlight-icon">🔒</div>
                  <h3>Cybersecurity</h3>
                  <p>Real-time threat intelligence systems and security auditing</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <h3>Machine Learning</h3>
                  <p>Deep learning models for image analysis and AI applications</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">⛓️</div>
                  <h3>Blockchain</h3>
                  <p>Smart contract development and decentralized applications</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">📊</div>
                  <h3>Data Analysis</h3>
                  <p>Advanced analytics and data-driven decision making</p>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Major Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 