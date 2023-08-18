import React from "react";

const Displaying = (props) => {
  if (props.users.table === "table1") {
    return (
      <div>
        <h1>Table1</h1>
        <p>
          {props.users.order} {props.users.dish} {props.users.price}
        </p>
      </div>
    );
  }
};

export default Displaying;
