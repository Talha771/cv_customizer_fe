"use client";

import React, { useState } from "react";
import "./styles.scss";

const App = () => {
  const [pdfAvailable, setPdfAvailable] = useState(0);

  return (
    <div className="app-container">
      <div className="main-content">
        {/* Form Section */}
        <div className="form-section">
          <h2>Generate Your CV</h2>
          <form>
            <div className="form-group">
              <label>Job Description</label>
              <textarea placeholder="Enter Job Description or Drop it Here" />
            </div>
            <div className="form-group">
              <label>Skills & Tools</label>
              <input
                type="text"
                placeholder="Enter list of tools"
              />
              <input
                type="text"
                placeholder="Enter list of languages"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                setPdfAvailable(1);
              }}
            >
              Generate CV
            </button>
          </form>
        </div>

        {/* Video Section */}
        {pdfAvailable ? (
          <div className="video-section">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/your_video_id"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
