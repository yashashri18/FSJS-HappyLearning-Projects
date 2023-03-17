import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo,removeTodo} from '../todoSlice'
import myImage from '../images/trash.png';


function TodoList(state) {
  const data = useSelector((state)=>state.todo.initialdata);
  const dispatch = useDispatch();
  
  const [newdata ,setnewdata]=useState("");
  const updatedata =(e)=>{
    setnewdata(e.target.value)
  }
  const onAddHandler = () => {
    dispatch(addTodo(newdata))
    setnewdata('')

  }
  console.log(newdata)
  return (
    <div className='main bg-[aliceblue]	h-screen	text-center	pt-[100px] '>
      <div className='main-up'>
        <h1 className='text-5xl	pb-[50px]'>NoteKeeper App</h1>
        <div className='flex	justify-center	gap-4		'>
          <input className="border-2 p-1.5	border	border-stone-900	rounded	text-xl	" type="text" onChange={updatedata} value={newdata}></input>
          <button className="bg-[#a2d2fc]	px-4	py-2.5 rounded-3xl		text-xl" onClick={onAddHandler} >Add</button>
        </div>
      </div>
      <div className='main-down grid	grid-cols-1	 	justify-center p-[100px] gap-y-20'>
      {
        data.map((e)=>(
          <div className='bg-[#a2d2fc] m-auto	w-10/12 md:w-6/12	p-2.5	rounded-xl	'>
          <h1 className='text-3xl'>{e.txt}</h1>
          <button onClick={()=>dispatch(removeTodo(e.id))} ><img alt="delete" className="h-12	p-1.5	" src={myImage}></img></button>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default TodoList
