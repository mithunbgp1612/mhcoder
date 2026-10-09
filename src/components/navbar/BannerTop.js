import React from "react";
import "./Banner.css";

export default function BannerTop() {
  return (
    <div className="top-banner">
      <div className="container">
        <div className="banner-content">
          <span className="banner-icon">🚀</span>

          <div className="banner-text-wrapper">
            <div className="banner-text">
              Welcome to MHCoder.com — Learn Java, Spring Boot,
              React, MySQL & Full Stack Development
            </div>
          </div>

          <span className="banner-badge">
            Start Learning →
          </span>
        </div>
      </div>
    </div>
  );
}