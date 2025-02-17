import { useState } from "react";

import("./ShoppingCartComponent.css");

const ShoppingCartComponent = () => {
  const [cart, setCart] = useState([]);

  const productList = [
    { id: 1, name: "Realme c2", price: 14000 },
    { id: 2, name: "Motorola", price: 10400 },
    { id: 3, name: "Oneplus", price: 20400 },
    { id: 4, name: "Iphone", price: 100400 },
  ];

  const handleAddtoCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <h1>Shopping Cart </h1>
      <div>
        <h3>Total Item: {cart.length}</h3>
        <h4>
          Total Item Cost: {cart.reduce((acc, curr) => acc + curr.price, 0)}
        </h4>
      </div>
      <Product productList={productList} handleAddtoCart={handleAddtoCart} />
    </div>
  );
};

const Product = ({ productList = [], handleAddtoCart }) => {
  return (
    <div className="product-container">
      {productList.map((data) => {
        return (
          <div className="product" key={data.id}>
            <h1>Name : {data.name}</h1>
            <h1>Price : {data.price}</h1>
            <button onClick={() => handleAddtoCart(data)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCartComponent;
