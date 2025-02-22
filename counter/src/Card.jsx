import React from 'react'

function Card(props)
{
    console.log(props.name);
    return (
    <>
        <div className="cards">
            <h3>Name:-{props.name} </h3>
            <h3>Age :- {props.age}</h3>
        </div>
    </>
    )
}

export default Card