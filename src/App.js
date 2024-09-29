import React, { useState } from 'react';
import CustomerHours from './components/CustomerHours';
import SpecialHours from './components/SpecialHours';
import AddSpecialHoursForm from './components/AddSpecialHoursForm';
import './App.css';

function App() {
  const [specialHours, setSpecialHours] = useState([
    {
      id: 1,
      date: '2024-12-25',
      openTime: '10:00:00',
      closeTime: '14:00:00',
      message: 'Christmas hours'
    },
    {
      id: 2,
      date: '2024-11-28',
      openTime: '10:00:00',
      closeTime: '15:00:00',
      message: 'Thanksgiving hours'
    }
  ]);

  const customerHours = [
    { id: 1, day: 'Monday - Thursday', openTime: '08:00:00', closeTime: '19:45:00' },
    { id: 2, day: 'Friday', openTime: '09:00:00', closeTime: '19:45:00' },
    { id: 3, day: 'Saturday - Sunday', openTime: '09:00:00', closeTime: '17:45:00' },
  ];

  const addSpecialHours = (newSpecialHours) => {
    setSpecialHours([...specialHours, newSpecialHours]);
  };

  return (
    <div className="App">
      <h1>Customer Service Hours Management</h1>
      <CustomerHours hours={customerHours} />
      <SpecialHours hours={specialHours} />
      <AddSpecialHoursForm addSpecialHours={addSpecialHours} />
    </div>
  );
}

export default App;