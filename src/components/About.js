import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-intro">
            <h1 className="about-name">Pavan Kalam</h1>
            <h2 className="about-title">Computer Science Specialist with Data Science Expertise</h2>
            <div className="about-divider"></div>
          </div>
          
          <div className="about-description">
            <p className="about-summary">
            Aspiring to contribute as a Data Scientist by applying strong proficiency in machine learning, 
            data analysis, and statistical modeling to solve complex business challenges. 
            Bringing hands-on experience in developing end-to-end ML solutions, ensuring data security compliance, 
            and delivering actionable insights through advanced analytics and visualizations.
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
                <span className="stat-number">3+</span>
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