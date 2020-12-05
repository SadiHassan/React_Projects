import React from "react";
import { useState } from "react";
import "./Cell.css";
import ModalTask from "./ModalTask";

function Cell({ props }) {
  const [state, setstate] = useState(false);
  const [selectedOption, setOption] = useState("");
  const [thisRow, setRow] = useState([])

  let option_class = "";
  if(selectedOption == "" || selectedOption == "0")
    option_class = "cell__completion"
  else if(selectedOption == "2")
    option_class = "cell__completion__dark__green"
  else if(selectedOption == "1")
    option_class = "cell__completion__light__green"

  const toggleState = () => {
    setstate(state ^ true);
  };
  //props.row[2] = 999;
  const handleOptionChange = (changeEvent) => {
    setOption(changeEvent.target.value);
    if(changeEvent.target.value === "")
    props.row[props.k] = changeEvent.target.value;
  };

  return (props.k == 0 ? (
    <div className="cell__date">{props.val}</div>
  ) : props.k == 1 ? (
    <div className="cell__day">{props.val}</div>
  ) : state == 0 ? (
    <div className={option_class} onClick={toggleState}>
      {" "}
      {props.val}{" "}
    </div>
  ) : (
    <>
      <div className={option_class} onClick={toggleState}>
        {" "}
        {props.val}{" "}
      </div>
      <ModalTask
        show={state}
        selectedOption={selectedOption}
        handleClose={toggleState}
      >
        <p>Add Amal</p>

        <p>
          <label>
            <input
              type="radio"
              value="2"
              checked={false}
              checked={selectedOption === "2"}
              onChange={handleOptionChange}
            />
            Performed On Time
          </label>
        </p>

        <p>
          <label>
            <input
              type="radio"
              value="1"
              checked={false}
              checked={selectedOption === "1"}
              onChange={handleOptionChange}
            />
            Performed Later
          </label>
        </p>

        <p>
          <label>
            <input
              type="radio"
              value="0"
              checked={selectedOption === "0"}
              onChange={handleOptionChange}
            />
            Will Perform Later Insha Allah
          </label>
        </p>
      </ModalTask>
    </>
  ));
}

export default Cell;
