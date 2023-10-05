import React, { useState } from "react";
import { FaBeer, FaApple, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./App.css";
import { ProductList, Product } from "./Data/data";
import Cart from "./Data/Component/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

 
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  }
  


  return (
    <div className="App">
      <header>
        <FaShoppingCart className="icon-cart" onClick={toggleCart} />
        <div id="total-item">0
        </div>
      </header>
      <main>
      {ProductList.map((product) => (
        <div className="product-card">
          <div className="product-stock">
            <i>
              <FaApple className="icon" />
            </i>
            <p>In Stock</p>
          </div>
          <div className="product-image">
            <img
              src={product.imgUrl}
              alt=""
            />
          </div>
          <div className="product-info">
            <div className="product-name">
              <h3>{product.name}</h3>
              <i>
                <FaApple className="icon" />
              </i>
            </div>
            <div className="product-price">
              <h4>{product.price}</h4>
              <button className="btn btb-add">Add</button>
            </div>

            <p>
              {product.des}
            </p>
          </div>
        </div>
      ))}
      </main>
      <div className="cart">
        {isCartOpen && <Cart onClick={closeCart} />}
      </div>
    </div>
  );
}

export default App;
