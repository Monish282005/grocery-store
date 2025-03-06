import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { groceries } from "./groceries";
import Footer from "./Footer";

export default function Home({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredItems = groceries.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchClick = (item) => {
    navigate(`/item/${item.name.toLowerCase()}`);
  };
  const fruits_vegetables = groceries.filter(
    (item) => item.category === "Fruits and Vegetables"
  );
  const DailyStaples = groceries.filter(
    (item) => item.category === "Daily Staples"
  );
  const Cleaning_household = groceries.filter(
    (item) => item.category === "Cleaning Household"
  );

  return (
    <div className="main" style={{ padding: "20px", marginLeft: "60px" }}>
      <img
        src="banner.png"
        alt="hero"
        style={{
          height: "400px",
          width: "80%",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      ></img>
      <input
        type="text"
        className="search-input"
        placeholder="Search for items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <div className="search-results">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="item-card"
              onClick={() => handleSearchClick(item)}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      )}
      <div>
        <div>
          <p className="p">vegetables</p>
        </div>
        <div className="container">
          {fruits_vegetables.map((item) => (
            <div key={item.id} className="item-card">
              <img
                src={item.image}
                alt={item.name}
                onClick={() => navigate(`/item/${item.name.toLowerCase()}`)}
              />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <p className="p">Daily Staples</p>
        <div className="container">
          {DailyStaples.map((item) => (
            <div key={item.id} className="item-card">
              <img
                src={item.image}
                alt={item.name}
                onClick={() => navigate( `/item/${item.name.toLowerCase()}`)}
              />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <p className="p">Cleaning & Household</p>

        <div className="container">
          {Cleaning_household.map((item) => (
            <div key={item.id} className="item-card">
              <img
                src={item.image}
                alt={item.name}
                onClick={() => navigate(`/item/${item.name.toLowerCase()}`)}
              />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}