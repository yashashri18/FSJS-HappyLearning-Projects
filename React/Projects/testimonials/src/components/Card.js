import React from 'react'

const Card = ({user,prevHandler,nextHandler}) => {
  
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-xl  w-4/6 mx-auto hover:shadow-xl hover:shadow-color-gray-800">
      
      <div className="flex flex-col justify-between items-center  h-full relative">
        
        <div className="flex justify-center items-center bg-slate-700 rounded-full w-64 h-64 absolute -top-20 ">
          <img className="rounded-full w-60 h-60 object-cover hover:scale-110 duration-200 " src={user.image} alt="imagehere" />
        </div>

        <div className=" text-center py-8 mt-40">
          <p className="text-white text-2xl font-bold tracking-wider">{user.name}</p>
          <p className="text-white text-lg">{user.job}</p>
        </div>

        <div className="text-white text-center text-xl px-8">
          <p className="mb-6">
            <div className="font-bold text-xl">"</div>
            {user.text}
            <div className="font-bold text-xl">"</div>
          </p>
        </div>

        <div className="flex justify-between w-full px-8 pb-8">
          <button onClick={prevHandler} className="px-6 py-2 rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Prev</button>
          <button onClick={nextHandler} className="px-6 py-2 rounded-md bg-purple-800 text-white font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Next</button>
        </div>

      </div>

    </div>
  )
}

export default Card


{/* <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            Prev
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" >
            Next
          </button>
        </div> */}