import { useState } from "react";
import data from "./data";

const ShoppingCartEnhanceComponent = () => {
  const [cartItems, setCartItem] = useState([]);

  const handleAddToCart = (item) => {
    const existingCartItem = cartItems.findIndex(
      (cartItem) => cartItem.item.id === item.id
    );

    if (existingCartItem > -1) {
      const updatedQty = [...cartItems];
      updatedQty[existingCartItem].qty++;
      setCartItem(updatedQty);
    } else {
      setCartItem((prev) => [...prev, { item, qty: 1 }]);
    }
  };

  return (
    <div>
      <h1>Shopping</h1>
      <h3>Total Items: {cartItems.length}</h3>
      <ProductLists handleAddToCart={handleAddToCart} items={data} />
      <hr />
      <ShoppingCartSection addedItems={cartItems} />
      <hr />
      <CheckoutSection addedItems={cartItems} />
    </div>
  );
};

const ProductLists = ({ handleAddToCart, items = [] }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid black", padding: "10px" }}
        >
          <h1>Name: {item.name}</h1>
          <h3>Price: {item.price}</h3>
          <h3>Category: {item.category}</h3>
          <button onClick={() => handleAddToCart(item)}>Add</button>
        </div>
      ))}
    </div>
  );
};

const ShoppingCartSection = ({ addedItems = [] }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {addedItems.length === 0 ? (
        <p>No Item added</p>
      ) : (
        <ul>
          {addedItems.map((item) => (
            <li key={item.item.id}>
              Added {item.qty} - {item.item.name}, Cost:{" "}
              {item.item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CheckoutSection = ({ addedItems = [] }) => {
  const totalPrice = addedItems
    .reduce((acc, curr) => acc + curr.qty * curr.item.price, 0)
    .toFixed(2);
  return (
    <div>
      <h1>Checkout Section</h1>
      <ul>
        {addedItems.map((item) => (
          <li key={item.item.id}>
            {item.qty} x {item.item.name}, cost:{" "}
            {(item.item.price * item.qty).toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total Cost: {totalPrice}</h3>
    </div>
  );
};

export default ShoppingCartEnhanceComponent;
