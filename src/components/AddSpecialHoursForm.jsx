import React, { useState } from 'react';
import '../styles/Card.css';

const AddSpecialHoursForm = ({ addSpecialHours }) => {
  const [date, setDate] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !openTime || !closeTime || !message) {
      alert('All fields are required!');
      return;
    }

    const newSpecialHours = {
      id: Date.now(),
      date,
      openTime,
      closeTime,
      message
    };

    addSpecialHours(newSpecialHours);

    setDate('');
    setOpenTime('');
    setCloseTime('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <h2>Add Special Hours</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date (YYYY-MM-DD):</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Open Time (HH:MM:SS):</label>
          <input
            type="time"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Close Time (HH:MM:SS):</label>
          <input
            type="time"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Special Hours</button>
      </form>
    </div>
  );
};

export default AddSpecialHoursForm;