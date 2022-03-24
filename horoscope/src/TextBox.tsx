
import React, {useState} from 'react';

interface Name {
    name: string;
}


function TextBox(prop: {name: string, change: (value: string) => void}) {
  return (
    <div className="textbox">
    <label>Enter {prop.name}: </label>
    <input type = "text" id = {prop.name} onChange = {(value) => prop.change(value.target.value)}></input>
    </div>
  );
}


export default TextBox;