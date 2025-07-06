import React, { useState } from 'react';
import '../styles/App.css';

const Shop = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! This feature will be implemented when the site goes live.');
    setEmail('');
  };

  return (
    <main className="shop-container">
      <h1>Shop</h1>
      
      <div className="shop-coming-soon">
        <h2>Shop coming soon</h2>
        <p>The online shop is currently in development and will be available soon.</p>
        
        <div className="shop-notify">
          <h3>Get notified</h3>
          <p>Sign up to be notified when the shop launches:</p>
          
          <form className="notify-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Shop;