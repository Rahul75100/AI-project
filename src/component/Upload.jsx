import React, { useState } from 'react';
import './upload.css';

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCameraClick = () => {
    alert("Camera functionality not yet implemented.");
  };

  return (
    <div className="upload-container">
      <h1>Upload Receipt</h1>

      <div className="upload-sections">
        {/* Receipt Scanner */}
        <div className="scanner-box">
          <h2>Receipt Scanner</h2>
          <p>Upload or take a photo of your shopping receipt to analyze your purchases</p>
          <div className="dropzone">
            <div className="upload-icon">📤</div>
            <p>Drag and drop your receipt or<br />PNG, JPG or PDF up to 10MB</p>
            <div className="button-group">
              <label className="upload-btn">
                <span>📁 Select File</span>
                <input type="file" onChange={handleFileChange} hidden />
              </label>
              <button className="camera-btn" onClick={handleCameraClick}>📷 Use Camera</button>
            </div>
          </div>
        </div>

        {/* Analysis Results */}
        <div className="result-box">
          <h2>Analysis Results</h2>
          <p>Upload a receipt to see the analysis</p>
          <div className="analysis-placeholder">
            <div className="analysis-icon">🔄</div>
            <p>No data to display yet</p>
            <span>Scan a receipt to see the analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
