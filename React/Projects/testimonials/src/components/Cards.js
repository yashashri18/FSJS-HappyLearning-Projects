import React, { useState } from 'react'
import Card from './Card';

const Cards = ({details}) => {
    const [index, setIndex] = useState(1);

    const prevHandler = () => {
        if(index-1 < 0){
            setIndex(details.length -1)
        }
        else{
            setIndex(index-1)
        }
        
    }
    const nextHandler = () => {
        if(index == details.length-1){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }


  return (
    <Card user={details[index]} nextHandler={nextHandler} prevHandler={prevHandler}/> 
  )
}

export default Cards
