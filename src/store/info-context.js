import React from "react";

const InfoContext = React.createContext({
  title: "",
  setTitle: () => {},
  text: "",
  setText: () => {},
  longText: "",
  setLongText: () => {},
  image: "",
  setImage: () => {},
  icon: "",
  setIcon: () => {},
  openModal: false,
  setOpenModal: () => {},
  showTiles: true,
  setShowTiles: () => {},
  showLarge: false,
  setShowLarge: () => {},
  submitForm: false,
  setSubmitForm: () => {},
});

export default InfoContext;
