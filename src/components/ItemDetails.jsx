import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { groceries } from './groceries';

export default function ItemDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();                    

  const item = groceries.find((grocery) => grocery.name.toLowerCase() === id);

  if (!item) {
    return (
      <div>
        <h2>Item not found!</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <h2>Price: {item.price}</h2>
      <p>Description: A fresh and delicious {item.name.toLowerCase()}.</p>
      <button
        onClick={() => addToCart(item)}
        style={{
          padding: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}