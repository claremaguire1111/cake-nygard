import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Home = () => {
  const artworks = [
    {
      id: 1,
      image: '/images/IMG_0168.PNG',
      title: 'Mopey 1',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 2,
      image: '/images/IMG_0169.PNG',
      title: 'Mopey 2',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 3,
      image: '/images/IMG_0170.PNG',
      title: 'Mopey 3',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 4,
      image: '/images/IMG_0171.PNG',
      title: 'Mopey 4',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 5,
      image: '/images/IMG_6832.AVIF',
      title: 'Mopey 5',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 6,
      image: '/images/mopey6.png',
      title: 'Mopey 6',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 7,
      image: '/images/mopey7.png',
      title: 'Mopey 7',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 8,
      image: '/images/mopey8.png',
      title: 'Mopey 8',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 9,
      image: '/images/mopey9.png',
      title: 'Mopey 9',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 10,
      image: '/images/mopey10.png',
      title: 'Mopey 10',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 11,
      image: '/images/mopeygroup.JPG',
      title: 'Mopey Group',
      year: '2024',
      medium: 'Painting'
    },
    {
      id: 12,
      image: '/images/6E11C90C-EA77-4928-BC03-C71B3FA2DA5E.jpg',
      title: 'Composition I',
      year: '2023',
      medium: 'Mixed Media'
    },
    {
      id: 13,
      image: '/images/FullSizeRender.jpg',
      title: 'Self Portrait',
      year: '2023',
      medium: 'Photography'
    },
    {
      id: 14,
      image: '/images/Untitled - November 3, 2022 09.04.jpg',
      title: 'Untitled',
      year: '2022',
      medium: 'Mixed Media'
    },
    {
      id: 15,
      image: '/images/Snapseed.heic',
      title: 'Edited Composition',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 16,
      image: '/images/IMG_6558.JPG',
      title: 'Study in Blue',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 17,
      image: '/images/IMG_3383.HEIC',
      title: 'Landscape Study',
      year: '2023',
      medium: 'Photography'
    },
    {
      id: 18,
      image: '/images/Selfie.png',
      title: 'Selfie',
      year: '2023',
      medium: 'Digital'
    },
    {
      id: 19,
      image: '/images/24C31739-6AC8-454C-99F7-A5C0BAFFE85E.jpg',
      title: 'Composition II',
      year: '2023',
      medium: 'Mixed Media'
    },
    {
      id: 20,
      image: '/images/Untitled - April 12, 2024 13.06.jpg',
      title: 'Untitled',
      year: '2024',
      medium: 'Mixed Media'
    },
    {
      id: 21,
      image: '/images/Dogfight2.png',
      title: 'Dogfight',
      year: '2023',
      medium: 'Digital'
    },
    {
      id: 22,
      image: '/images/Kidskull3.png',
      title: 'Kid Skull',
      year: '2023',
      medium: 'Digital'
    },
    {
      id: 23,
      image: '/images/IMG_4425.JPG',
      title: 'Urban Composition',
      year: '2023',
      medium: 'Photography'
    },
    // Adding newly added images from the add folder
    {
      id: 24,
      image: '/images/add/Screenshot 2025-07-06 at 10.57.38.png',
      title: 'Digital Artwork I',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 25,
      image: '/images/add/bdefd8b5-74f5-4329-95fc-769cfcdb790b.jpg',
      title: 'Exhibition Piece',
      year: '2023',
      medium: 'Mixed Media'
    },
    {
      id: 26,
      image: '/images/add/Screenshot 2025-07-06 at 10.59.20.png',
      title: 'Digital Artwork II',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 27,
      image: '/images/add/Screenshot 2025-07-06 at 11.00.37.png',
      title: 'Digital Artwork III',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 28,
      image: '/images/add/Screenshot 2025-07-06 at 10.57.58.png',
      title: 'Digital Artwork IV',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 29,
      image: '/images/add/Screenshot 2025-07-06 at 10.58.48.png',
      title: 'Digital Artwork V',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 30,
      image: '/images/add/Screenshot 2025-07-06 at 10.59.29.png',
      title: 'Digital Artwork VI',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 31,
      image: '/images/add/Screenshot 2025-07-06 at 10.58.09.png',
      title: 'Digital Artwork VII',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 32,
      image: '/images/add/Screenshot 2025-07-06 at 11.00.44.png',
      title: 'Digital Artwork VIII',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 33,
      image: '/images/add/Screenshot 2025-07-06 at 10.57.38-1.png',
      title: 'Digital Artwork IX',
      year: '2024',
      medium: 'Digital'
    },
    {
      id: 34,
      image: '/images/add/IMG_2542.jpg',
      title: 'Gallery Exhibition',
      year: '2023',
      medium: 'Photography'
    },
    {
      id: 35,
      image: '/images/add/Screenshot 2025-07-06 at 10.57.28.png',
      title: 'Digital Artwork X',
      year: '2024',
      medium: 'Digital'
    }
  ];

  return (
    <main className="work-grid">
      {artworks.map(artwork => (
        <div className="work-item" key={artwork.id}>
          <Link to="/">
            <img src={artwork.image} alt={artwork.title} />
            <div className="work-info">
              <h3>{artwork.title}, {artwork.year}</h3>
              <p>{artwork.medium}</p>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Home;