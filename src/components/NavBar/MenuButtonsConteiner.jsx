import React from "react";
import MenuButtons from "./MenuButtons";
import { useSelector } from 'react-redux'

let MenuButtonsConteiner = () => {
  let positionY = useSelector(state => state.scrollState.position.y)

  return (
   <MenuButtons 
   positionY={positionY}

   />)
};

export default MenuButtonsConteiner;
