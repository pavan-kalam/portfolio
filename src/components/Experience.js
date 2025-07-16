
import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Data Scientist</h3>
        <p>Aircom Systems Pvt. Ltd</p>
        <p>Bangalore, India | Oct 2020 – Dec 2023</p>
        <ul>
          <li>Developed and deployed supervised and unsupervised machine learning models for classification, forecasting, and clustering using Python (scikit-learn, TensorFlow and Keras).</li>
          <li>Wrote SQL queries in PostgreSQL for data extraction, transformation, and feature engineering to support model development.</li>
          <li>Collaborated closely with Data Engineers to design scalable ETL pipelines and containerized ML workflows using Docker.</li>
          <li>Conducted statistical analysis, data profiling, and hypothesis testing to validate business assumptions and model performance.</li>
          <li>Integrated NIST Cybersecurity Framework standards to ensure secure data handling, access control, and audit readiness throughout the ML lifecycle.</li>
          <li>Created dynamic dashboards and visual reports using Power BI and Plotly to present insights and recommendations to stakeholders.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
