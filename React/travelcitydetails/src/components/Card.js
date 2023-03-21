import React, { useState } from 'react'

function Card({citiItem,removeCity}) {

    const [readmore,setReadMore] = useState(false)
    const ReadToggle =()=>{
        setReadMore(!readmore)
    }
    return (
        <div>
        <div className="bg-white w-6/6 p-2 rounded-md drop-shadow-xl hover:scale-105 hover:shadow-sm  duration-300 ">
            <img className="w-full h-72" src={citiItem.image} alt="imagehere" />
            <div className="text-green-600 font-bold text-xl " >Rs. {citiItem.price}</div>
            <h2 className=" font-bold text-2xl">{citiItem.name}</h2>
            <div className="w-full">{readmore? citiItem.info:citiItem.info.substring(0,180)} <span className="text-blue-400 cursor-pointer" onClick={ReadToggle}>{readmore?"Show Less":"Read More"}</span></div>
            <button className="w-2/6 bg-red-400  text-gray-900 font-bold  mt-2 rounded-md" onClick={()=>{removeCity(citiItem.id)}}>Not Interested</button>
        </div>
        </div>
    )
}

export default Card
