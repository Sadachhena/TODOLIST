import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function TodoApp() {
  let [todo,settodo]=useState([])
  let todoname=(event)=>{
    let input=event.target.input.value;
    if(!todo.includes(input)){
      let finaltodo=[...todo,input]
      settodo(finaltodo)
    }
    else{
      toast("Allready Data Entred")
    }
    event.preventDefault();
  }
  
  return (
    <section className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center px-6'>
      <ToastContainer/>
      <div className='w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/20'>
        
        <h1 className='font-extrabold text-4xl text-center text-white mb-8 tracking-wide'>
          ✨ Todo List
        </h1>

        <form onSubmit={todoname} autoComplete='' className='flex gap-4 mb-8'>
          <input 
          type='text'
            name='input' 
            placeholder='Enter your task...'
            className='flex-1 bg-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300'
          />
          <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105'>
            Save
          </button>
        </form>

        <div>
          <ul className='space-y-4'>
            {todo.map((value,i)=>{
              return(
                <TodoData 
                  key={i}
                  value={value} 
                  todo={todo} 
                  settodo={settodo} 
                  index={i}
                />
              )
            })}       
          </ul>
        </div>

      </div>
    </section>
  )
}

function TodoData({value,todo,settodo,index }) {
  let Delte=()=>{
    let filter=todo.filter((v,i)=>i!=index)
    settodo(filter)
  }
  return(
    <li className='flex justify-between items-center bg-white/20 text-white px-5 py-3 rounded-xl shadow-md hover:scale-[1.02] transition duration-300'>
      <span className='tracking-wide'>{value}</span>
      <span 
        onClick={Delte} 
        className='cursor-pointer text-red-400 hover:text-red-600 text-2xl font-bold transition duration-300'
      >
        &times;
      </span>
    </li>
  )
}
