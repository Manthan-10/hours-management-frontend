import React from 'react';
import '../styles/Card.css'

const CustomerHours = ({ hours }) => {
  return (
    <div>
        <h2>Customer Support Hours</h2>
        <div className="card-container">
        {hours.map((hour) => (
            <div key={hour.id} className="card">
            <strong>{hour.day}</strong>
            <p>
                {hour.openTime} - {hour.closeTime}
            </p>
            </div>
        ))}
        </div>
    </div>
  );
};

export default CustomerHours;