import React from "react";

const Table = () => {
  return (
    <div>
      <select id="tableSelect">
        <option value="">-- Select a table --</option>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
    </div>
  );
};

export default Table;
