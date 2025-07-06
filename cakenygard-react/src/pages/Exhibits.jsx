import React, { useState } from 'react';
import '../styles/App.css';

const Exhibits = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const exhibits = [
    {
      id: 1,
      title: 'Art + Tech with Christie\'s',
      date: 'February 2025',
      location: 'ArtVerse Gallery, Paris',
      description: 'Group exhibition with Damien Hirst, Takashi Murakami, Mr. Misang, Seonyo, Marina Abramovic, Zancan'
    },
    {
      id: 2,
      title: 'Miami Art Basel',
      date: 'December 2024',
      location: 'Miami, FL',
      description: 'Live painting and events'
    },
    {
      id: 3,
      title: 'London Group Exhibition',
      date: '2024',
      location: 'London, United Kingdom',
      description: 'Group exhibition'
    },
    {
      id: 4,
      title: 'New Frontiers in Digital Art',
      date: 'July - August 2024',
      location: 'The Digital Art Space, New York',
      description: 'Group exhibition'
    },
    {
      id: 5,
      title: 'Istanbul Group Exhibition',
      date: 'November 2023',
      location: 'Istanbul, Turkey',
      description: 'Group exhibition'
    },
    {
      id: 6,
      title: 'Seoul Exhibition',
      date: '2023',
      location: 'Seoul, South Korea',
      description: 'Group exhibition'
    },
    {
      id: 7,
      title: 'Tokyo Art Show',
      date: '2023',
      location: 'Tokyo, Japan',
      description: 'Group exhibition'
    },
    {
      id: 8,
      title: 'Solo Show',
      date: 'July 2023',
      location: 'Galerie IHAM, Paris',
      description: 'Solo exhibition'
    },
    {
      id: 9,
      title: 'The Algarve Exhibition',
      date: 'July 2023',
      location: 'The Algarve, Portugal',
      description: 'Group exhibition'
    },
    {
      id: 10,
      title: 'Lisbon Exhibition',
      date: 'June 2023',
      location: 'Lisbon, Portugal',
      description: 'International art showcase'
    },
    {
      id: 11,
      title: 'LAVAN NYC Exhibition',
      date: 'May 2023',
      location: 'LAVAN, New York City',
      description: 'Featured exhibition'
    },
    {
      id: 12,
      title: 'Live Painting Events',
      date: 'May 2023',
      location: 'Various Locations',
      description: 'Live performance art'
    },
    {
      id: 13,
      title: 'Exhibited in front of MoNA Museum',
      date: 'April 2023',
      location: 'New York City',
      description: 'Public art display'
    },
    {
      id: 14,
      title: 'Le Grand Palais Exhibition',
      date: 'April 2023',
      location: 'Le Grand Palais, Paris',
      description: 'Featured exhibition'
    },
    {
      id: 15,
      title: 'Live Graffiti Mural with Jason Naylor',
      date: 'July 2022',
      location: 'Brooklyn, New York City',
      description: 'Collaborative mural'
    },
    {
      id: 16,
      title: 'Times Square Installation',
      date: 'June 2022',
      location: 'Times Square, New York City',
      description: 'Public art display'
    },
    {
      id: 17,
      title: 'Studiiyo23 Exhibition',
      date: '2020',
      location: 'Minneapolis, MN',
      description: 'Featured artist exhibition'
    },
    {
      id: 18,
      title: 'Zeitgeist Theatre',
      date: '2020',
      location: 'Duluth, MN',
      description: 'Solo exhibition'
    }
  ];

  // Combined gallery images
  const galleryImages = [
    // Lisbon images
    '/images/Lisbon/2D1B6A18-AB0F-4135-8CFE-5803E91857C6.jpg',
    '/images/Lisbon/9B2CFA23-A755-4262-AE39-FD33AC3F809B.jpg',
    '/images/Lisbon/CD024809-E070-460E-BE21-94CDF42F1496.jpg',
    '/images/Lisbon/Gkd3OnYXkAAgQU2.jpg',
    '/images/Lisbon/Gkd3QSNaAAAMEGe.jpg',
    '/images/Lisbon/Gkd3TN7XAAE0qh7.jpg',
    '/images/Lisbon/FullSizeRender.jpg',
    '/images/Lisbon/IMG_2542.PNG',
    // Miami images - note the folder name has a space
    '/images/Miami /Screenshot 2025-07-06 at 11.29.25.png',
    '/images/Miami /Screenshot 2025-07-06 at 11.29.34.png',
    '/images/Miami /Screenshot 2025-07-06 at 11.29.48.png',
    '/images/Miami /Screenshot 2025-07-06 at 11.29.58.png',
    '/images/Miami /Screenshot 2025-07-06 at 11.30.05.png',
    '/images/Miami /Screenshot 2025-07-06 at 11.30.13.png',
    '/images/Miami /Screenshot 2025-07-06 at 11.30.22.png',
    // Continue with Lisbon images
    '/images/Lisbon/Screenshot 2025-07-06 at 10.56.26.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.56.40.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.57.13.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.57.28.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.57.38.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.57.48.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.57.58.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.58.09.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.58.33.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.58.48.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.59.01.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.59.12.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.59.20.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.59.29.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 10.59.38.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 11.00.27.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 11.00.37.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 11.00.44.png',
    '/images/Lisbon/Screenshot 2025-07-06 at 11.00.53.png',
    '/images/Lisbon/bdefd8b5-74f5-4329-95fc-769cfcdb790b.jpg',
    '/images/Lisbon/168a637d-78ba-4377-bd1e-0c4ec7df007e.jpg',
    '/images/Lisbon/256e068f-21f2-42dc-a808-e319e57160b6.jpg',
    '/images/Lisbon/0319cd1a-6da9-4700-8015-7184652fec42.jpg'
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="exhibits-container">
      <h1>Exhibitions & Events</h1>
      
      <section className="exhibitions-list">
        <h2>Past & Upcoming Exhibitions</h2>
        {exhibits.map(exhibit => (
          <div className="exhibit-item" key={exhibit.id}>
            <h3>{exhibit.title}</h3>
            <p className="exhibit-date">{exhibit.date}</p>
            <p className="exhibit-location">{exhibit.location}</p>
            <p className="exhibit-description">{exhibit.description}</p>
          </div>
        ))}
      </section>

      <section className="gallery-section">
        <h2>Exhibition Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={`gallery-${index}`} onClick={() => openModal(image)}>
              <img src={image} alt={`Exhibition Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button">&times;</span>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Exhibits;