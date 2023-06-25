import { useState } from "react";
import "./App.css";
import AddToCartComponent from "./components/AddToCartComponent";
import CartComponent from "./components/CartComponent";
import TotalComponent from "./components/TotalComponent";
import TotalContext from "./Store/TotalContext";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "laptop", price: 1000 },
    { id: 2, name: "mobile", price: 500 },
    { id: 3, name: "watch", price: 100 },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const handleClick = (item) => {
    setCartItems([...cartItems, item]);
    const newtotal = total + parseInt(item.price);
    setTotal(newtotal);
    console.log(cartItems);

    alert(`Item: ${item.name} added`);
  };

  return (
    <div>
      <AddToCartComponent items={items} handleClick={handleClick} />
      <TotalContext.Provider value={total}>
        <CartComponent cartItems={cartItems} />
        <TotalComponent />
      </TotalContext.Provider>
    </div>
  );
}

export default App;
