import React from 'react';
import "./style.css"

const PanoramaComponent = () => {
  return (
    <div className='PanoramaContainer'>
        <h2>360 image intergration</h2>
      <iframe
        title="360 degree panorama"
        width="100%"
        height="450"
        src="https://momento360.com/e/u/276bda5f340545a1b410f801cf57f533?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
        allowFullScreen=""
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default PanoramaComponent;
