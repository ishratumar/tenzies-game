import React from 'react'
export default function App(props){
    return(
      <div className="die-face">
      <h1 className="die-num">{props.value}</h1>
      </div>
    )
  }
  