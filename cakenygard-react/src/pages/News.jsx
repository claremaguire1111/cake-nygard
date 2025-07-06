import React, { useEffect } from 'react';
import '../styles/App.css';

const News = () => {
  useEffect(() => {
    // Redirect to Instagram when component mounts
    window.location.href = "https://www.instagram.com/cakenygardart/";
  }, []);

  return (
    <main className="news-container">
      <h1>News</h1>
      <p>Redirecting to Instagram...</p>
    </main>
  );
};

export default News;