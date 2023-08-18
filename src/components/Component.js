import React, { useState } from "react";
//import Table from './Table'
//import Displaying from "./Displaying";

const Component = (props) => {
  const [order, setOrder] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setSelectedTable] = useState("");

  const orderhandler = (event) => {
    setOrder(event.target.value);
  };

  const pricehandler = (event) => {
    setPrice(event.target.value);
  };

  const dishHandler = (event) => {
    setDish(event.target.value);
  };

  const handleTableChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTable(selectedValue);
  };

  const submithandler = () => {
    const User = {
      price: price,
      order: order,
      dish: dish,
      table: table,
    };
    props.onAdd(User);
    localStorage.setItem(order, JSON.stringify(User));
  };

  return (
    <form onSubmit={submithandler}>
      <label>Unique Order Id</label>
      <input type="number" value={order} onChange={orderhandler} />
      <label>Choose Price</label>
      <input type="number" value={price} onChange={pricehandler} />
      <label>Choose Dish</label>
      <input type="text" value={dish} onChange={dishHandler} />
      <label>Choose Table</label>
      <select onChange={handleTableChange}>
        <option value="">-- Select a table --</option>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
      <button type="submit"> Add to Bill</button>
    </form>
  );
};

export default Component;
