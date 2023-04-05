import React from "react";

const InfoContext = React.createContext({
  title: "",
  setTitle: () => {},
  text: "",
  setText: () => {},
  image: "",
  setImage: () => {},
});

export default InfoContext;
