import React from "react";

export default function Sideblock(props) {
    let display = "" ;
    if(props.startinvalid || props.endinvalid)
    display = "invalid input"
    else
    display = ""
    return (
        <div id="sideadjustment">
            <div className="border-bottom pb-2">
                <h5>Filters</h5>
                <h6 className="mt-1">Years : </h6>
                <div className="d-flex flex-row align-items-center">
                    <input  className="yearinputs m-1" placeholder="" onChange={props.changestart} type="number"  /><b>-</b>
                    <input  className="yearinputs m-1" placeholder="" onChange={props.changeend} type="number"/>
                </div>
                <text>* only from 1901-2022</text>
                <h6 className="mt-1">Category : </h6>
                <select name="category" onChange={props.changecategory}>
                    <option value={"all"}>All</option>
                    <option value={"chemistry"}>Chemistry</option>
                    <option value={"economics"}>Economics</option>
                    <option value={"literature"}>Literature</option>
                    <option value={"peace"}>Peace</option>
                    <option value={"physics"}>Physics</option>
                    <option value={"medicine"}>Medicine</option>
                </select>
                <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                    <button className="btn btn-secondary" onClick={props.handleclick}>apply filters</button>
                </div>
                <div className="d-flex flex-column align-items-center" style={{color : "red"}}>{display}</div>
            </div>
            <div className="mt-2" id="multipleawardees">
                <h6>Multiple nobels : </h6>
                <ul>
                    <li><b>John Bardeen</b><br />1972 - physics<br />1956 - physics</li>
                    <li><b>Frederick Sanger</b><br />1980 - chemistry<br />1958 - chemistry</li>
                    <li><b>Karl Barry Sharpless</b><br />2022 - chemistry<br/>2001 - chemistry</li>
                    <li><b>Marie Curie</b><br />1911 - chemistry<br />1903 - physics</li>
                    <li><b>Linus Pauling</b><br />1962 - peace<br/>1954 - chemistry</li>
                    <li style={{display : "none"}}></li>
                </ul>
            </div>
        </div>
    )
}
