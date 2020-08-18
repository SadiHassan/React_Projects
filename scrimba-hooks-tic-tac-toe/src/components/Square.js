import React, {useState} from 'react';

/*
// this is how props look like and ...
const props = {
    onClick: () => "function",
    value: "X"
};
// this is how destructuring looks like that we will pass as parameter in Square function...
const { value } = props;
*/

const style = {
    background: 'lightgray',
    border: '2px solid darkblue',
    fontSize: '5rem',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    //margin: '10px 10px'
    hover: {
        background: 'red'
      }
};
/* 
        style is a default prop given by React, where we are now giving our created style object
<button style={style} onClick={onClick}>
*/
const Square = ({value, onClick}) =>{
    const [hover, setHover] = useState(false);
    return (
        <button 
            style={{...style,
                ...(hover ? style.hover : null)}} 
            onClick={onClick}
            onMouseEnter={()=>{
                setHover(true);
                //console.log("Entered");
              }}
              onMouseLeave={()=>{
                setHover(false);
                //console.log("Removed");
              }}
        >
            {value}
        </button>
    );
} 

export default Square;