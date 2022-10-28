import React from "react";

export default function Header(props) {
    return (
        <div className="d-flex flex-row align-items-center p-2 border-bottom border-3 sticky-top" style={{backgroundColor : props.mode ? "black" : "white"}} id="headeritem">
            <img src="https://upload.wikimedia.org/wikipedia/en/6/6a/Nobel_medal.png" id="headerimage"/>
            <h4 className="ms-2" style={{color : props.mode ? "white" : "black"}}>Nobel Laureate</h4>
            <div id="darkmode" className="ms-auto me-1" style={{backgroundColor : props.mode ? "white" : "black"}} onClick={props.changemode}></div>
            <button id="panelbutton" className="btn btn-secondary" onClick={props.sidepaneloperation}>Filters</button>
        </div>
    )
}