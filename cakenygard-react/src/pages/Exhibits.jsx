import React from 'react';
import '../styles/App.css';

const Exhibits = () => {
  const exhibits = [
    {
      id: 1,
      title: 'Digital Dreams',
      date: 'October 15 - November 30, 2024',
      location: 'Minneapolis Contemporary Art Gallery',
      description: 'Solo exhibition'
    },
    {
      id: 2,
      title: 'New Frontiers in Digital Art',
      date: 'July 5 - August 20, 2024',
      location: 'The Digital Art Space, New York',
      description: 'Group exhibition'
    },
    {
      id: 3,
      title: 'Midwest Emerging Artists',
      date: 'March 10 - April 15, 2024',
      location: 'Heartland Gallery, Chicago',
      description: 'Group exhibition'
    },
    {
      id: 4,
      title: 'Caked World: Origins',
      date: 'November 5 - December 20, 2023',
      location: 'Minnesota Arts Center, St. Paul',
      description: 'Solo exhibition'
    }
  ];

  return (
    <main className="exhibits-container">
      <h1>Exhibitions</h1>
      {exhibits.map(exhibit => (
        <div className="exhibit-item" key={exhibit.id}>
          <h2>{exhibit.title}</h2>
          <p className="exhibit-date">{exhibit.date}</p>
          <p className="exhibit-location">{exhibit.location}</p>
          <p className="exhibit-description">{exhibit.description}</p>
        </div>
      ))}
    </main>
  );
};

export default Exhibits;