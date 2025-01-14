import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleButton() {
const {mode,themeChange} = useContext(ThemeContext);
  return (
    <div>
      <h3>Dark/Light Theme</h3>
      <h4>My current mode is {mode} </h4>
      <button onClick={()=>themeChange()} >Toggle</button>
    </div>
  );
}
export default ToggleButton;
