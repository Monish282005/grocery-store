import React from 'react';
import './Checkout.css';

export default function Checkout({cart,totalPrice}) {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100px', height: '100px' }}
                    />
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.price}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.quantity}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    ${(item.quantity * parseFloat(item.price.replace(/[^0-9.]/g, ''))).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
      <button className="checkout-button">Make Payment</button>
    </div>
  )
}