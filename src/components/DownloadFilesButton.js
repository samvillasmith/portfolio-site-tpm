import React, { useState } from 'react';
import cvFile from '../assets/Telmii_Case_Study_And_Documentation.zip';  // Import the PDF file

const DownloadFilesButton = (props) => {
  // Set the initial state for the download count and the last time a download was performed
  const [downloadCount, setDownloadCount] = useState(0);
  const [lastDownloadTime, setLastDownloadTime] = useState(null);

  // Define the rate limit (e.g. 5 downloads per hour)
  const rateLimit = 5;
  const rateLimitPeriod = 60 * 60 * 1000;  // 1 hour in milliseconds

  const handleDownload = () => {
    // Check if the rate limit has been reached
    const now = Date.now();
    if (downloadCount >= rateLimit && now - lastDownloadTime < rateLimitPeriod) {
      // Rate limit has been reached, show an alert to the user
      alert(`You have reached the download limit of ${rateLimit} downloads per ${rateLimitPeriod / (60 * 60 * 1000)} hour(s). Please try again later.`);
      return;
    }

    // Create a link element
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Telmii_Case_Study_And_Documentation.zip';  // Set the file name
    link.click();  // Trigger the download

    // Update the download count and last download time
    setDownloadCount(downloadCount + 1);
    setLastDownloadTime(now);
  };

  return (
    <button onClick={handleDownload} style={{
        backgroundColor: "#0077c9",
        color: "#fff",
        fontSize: "1.4em",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        boxshadow: "0px 2px 4px rgba(0, 0, 0, 0.1",
        transition: "all 0.3s",
        margin: "40px 5px"
        }}>{props.downloadText}</button>
  );
};

export default DownloadFilesButton;
