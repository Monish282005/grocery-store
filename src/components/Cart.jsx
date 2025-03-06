import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Cart({ cart, updateCartItem }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price.slice(1)),0);

  return (
    <div style={{ padding: "20px" }} className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Image
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Price
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Quantity
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Total
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.price}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateCartItem(item.id, parseInt(e.target.value, 10))
                    }
                    style={{ width: "50px", textAlign: "center" }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  $
                  {(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button
                    onClick={() => updateCartItem(item.id, 0)}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <Link to="/Checkout">
        {" "}
        <button className="checkout-button">Checkout</button>
      </Link>
    </div>
  );
}