import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>User Details are - </h1>
      {/* optional chaining */}
      <img src={props.mydetails.picture?.large}></img>
      <h2>Name of Random User is {props.mydetails.name?.first}</h2>
      <h2>Phone number is {props.mydetails.phone}</h2>
    </div>
  )
}

export default Card
