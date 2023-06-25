const AddToCartComponent = ({ items, handleClick }) => {
  return (
    <div className="container">
      <h1>Store</h1>
      <ul className="cartlist">
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            {"    "} - {"   "}${item.price}{" "}
            <button onClick={() => handleClick(item)}>Add Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCartComponent;
