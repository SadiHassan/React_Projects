import React from "react";
import { useState } from "react";
import "./Cell.css";
import ModalTask from "./ModalTask";

function Cell({ props }) {
  
  const [state, setstate] = useState(false);
  const [selectedOption, setOption] = useState("");

  const toggleState = () => {
    setstate(state ^ true);
    alert(selectedOption)
  };

  const handleOptionChange = (changeEvent) =>  {
    //console.log("selectedOption [Before] : " + selectedOption)  
    setOption(changeEvent.target.value);
    //console.log("selectedOption [After] : " + selectedOption)  
    //console.log(changeEvent.target.value)
    //alert(selectedOption)
  }

  return props.k == 0 ? (
    <div className="cell__date">{props.val}</div>
  ) : props.k == 1 ? (
    <div className="cell__day">{props.val}</div>
  ) : state == 0 ? (
    <div className="cell__completion" onClick={toggleState}>
      {" "}
      {props.val}{" "}
    </div>
  ) : (
    <>
      <div className="cell__completion_clicked" onClick={toggleState}>
        {" "}
        {props.val}{" "}
      </div>
      <ModalTask show={state} selectedOption = {selectedOption} handleClose={toggleState}>
        <p>Add Amal</p>

        <p>
          <label>
            <input type="radio" value="option1" checked={false} 
            checked={selectedOption === 'option1'} 
            onChange={handleOptionChange}
            />
            Performed On Time
          </label>
        </p>

        <p>
          <label>
            <input type="radio" value="option2" checked={false} 
            checked={selectedOption === 'option2'} 
            onChange={handleOptionChange}
            />
            Performed Later
          </label>
        </p>

        <p>
          <label>
            <input type="radio" value="option3" 
            checked={selectedOption === 'option3'} 
            onChange={handleOptionChange}
            />
            Will Perform Later Insha Allah
          </label>
        </p>
      </ModalTask>
    </>
  );
}

export default Cell;
