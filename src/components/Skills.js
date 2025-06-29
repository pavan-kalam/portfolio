import React from 'react';
import { FaCode, FaChartBar, FaRobot, FaDatabase, FaCloud, FaServer, FaReact, FaDocker, FaGitAlt, FaTasks } from 'react-icons/fa';

const skills = {
  "Programming Languages": { icon: <FaCode />, list: ["Python", "Java", "C++", "JavaScript"] },
  "Data Analysis & Visualization": { icon: <FaChartBar />, list: ["Power BI", "Tableau", "Matplotlib", "Pandas"] },
  "Machine Learning & AI": { icon: <FaRobot />, list: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"] },
  "Big Data Technologies": { icon: <FaDatabase />, list: ["Apache Hadoop", "Apache Spark", "Apache Kafka"] },
  "Cloud Platforms": { icon: <FaCloud />, list: ["AWS", "Google Cloud Platform (GCP)", "Microsoft Azure"] },
  "Database Management": { icon: <FaServer />, list: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"] },
  "Web Development": { icon: <FaReact />, list: ["HTML", "CSS", "React.js", "Node.js"] },
  "DevOps Tools": { icon: <FaDocker />, list: ["Docker", "Kubernetes", "Jenkins", "Git"] },
  "Version Control": { icon: <FaGitAlt />, list: ["Git", "GitHub", "GitLab"] },
  "Software Development Life Cycle (SDLC)": { icon: <FaTasks />, list: ["Agile", "Scrum", "Waterfall"] },
};

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.keys(skills).map((category, index) => (
          <div className="skill-category" key={index}>
            <div className="skill-category-header">
              {skills[category].icon}
              <h3>{category}</h3>
            </div>
            <ul>
              {skills[category].list.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;