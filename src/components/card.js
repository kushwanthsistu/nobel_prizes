import React from "react";

  export default function Card(data) {
    if(!data)
    return <></>
    let list = []
    if(data.laureates) {
        list = data.laureates.map((laureatesdata, index) => {
            return <li><b>{laureatesdata.firstname} {laureatesdata.surname}</b> <br />{laureatesdata.motivation}</li>
        })
    }
    else {
        list = [<li>No Nobel prize was awarded</li>]
    }
    return (
        <div className="boxes p-2 border" style={{backgroundColor : data.mode ? "#000000" : "#f8f9fa"}}>
            <text><b>Year : </b>{data.year}</text><br />
            <text><b>Category : </b>{data.category}</text><br />
            <text><b>Laureates : </b></text>
            <ul>
                {list}
            </ul>
            <p><b>{data.overallMotivation && "Overall Motivation : "}</b>{(data.overallMotivation) && data.overallMotivation}</p>
        </div>
    )
  }