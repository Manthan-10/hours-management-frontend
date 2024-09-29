import React from 'react';
import '../styles/Card.css';

const SpecialHours = ({ hours }) => {
  return (
    <div>
        <h2>Special Hours</h2>
        <div className="card-container">
        {hours.length === 0 ? (
            <p>No special hours configured.</p>
        ) : (
            hours.map((hour) => (
            <div key={hour.id} className="card">
                <strong>{hour.date}</strong>
                <p>
                {hour.openTime} - {hour.closeTime}
                </p>
                <p className="message">{hour.message}</p>
            </div>
            ))
        )}
        </div>
    </div>
  );
};

export default SpecialHours;