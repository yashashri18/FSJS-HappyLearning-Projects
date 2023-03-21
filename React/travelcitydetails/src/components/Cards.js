import React from 'react'
import Card from './Card'
function Cards({cityList,removeCity}) {

    return (
        <div className="box-border  p-12 bg-gray-200 grid  gap-12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
            {cityList.map((citiItem)=>(
                <Card key={citiItem.id} citiItem={citiItem} removeCity={removeCity}/>
            ))}
        </div>
    );
}

export default Cards

