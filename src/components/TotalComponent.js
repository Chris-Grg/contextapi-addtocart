import React, { useContext } from "react";
import TotalContext from "../Store/TotalContext";

const TotalComponent = () => {
  const total = useContext(TotalContext);

  return (
    <div className="container total">
      <h1>Total</h1>
      Total: ${total}
    </div>
  );
};

export default TotalComponent;
