import React from 'react';
import "./style.css"
const MapComponent = () => {
  return (
    <div className='MapContainer'>
      <h2>Map intergration</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2481.4600418069726!2d-0.2610174!3d51.5414628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611967e94e951%3A0x9dae31c05fde0964!2sBridge%20Park%20Hotel!5e0!3m2!1sen!2slk!4v1713963613608!5m2!1sen!2slk"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
    </div>
  );
};

export default MapComponent;
