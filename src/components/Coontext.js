import React from "react";

const Coontext = React.createContext();

const Userprovider = Coontext.Provider;

const Userconsumer = Coontext.Consumer;

export { Userprovider, Userconsumer };
