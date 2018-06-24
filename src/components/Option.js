import React from "react";

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button button--link"
            onClick={event => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>    
);

export default Option; 
// if we used export default (props) => ... it would show as Unknown in react dev tools
