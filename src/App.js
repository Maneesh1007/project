import React, { useState } from "react";
import Component from "./components/Component";
import Displaying from "./components/Displaying";

function App() {
  const [user, setUser] = useState({});

  const userhandler = (User) => {
    setUser(User);
  };
  return (
    <div>
      <Component onAdd={userhandler} />
      <Displaying users={user} />
    </div>
  );
}

export default App;
