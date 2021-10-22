import React from 'react';
import './StatsPreview.css';
import headerImage from '../resources/image-header-desktop.jpg';

export default function StatsPreview() {
  return (
    <div className="container">
      <div className="textSection">
        <h1 className="title">
          Get <span className="accent">insights</span> that help your business grow.
        </h1>
        <p className="paragraph">
          Discover the benefits of data analytics and make better decisions regarding revenue,
          customer experience, and overall efficiency.
        </p>
        <div className="stats">
          <div className="companies">
            <h2>10k+</h2>
            <p>COMPANIES</p>
          </div>
          <div className="templates">
            <h2>314</h2>
            <p>TEMPLATES</p>
          </div>
          <div className="queries">
            <h2>12M+</h2>
            <p>QUERIES</p>
          </div>
        </div>
      </div>

      <div className="imageSection"></div>
    </div>
  );
}
