import React from 'react'
import Todofrom from './Todofrom';
import { useState } from 'react';
import Todo from './Todo';

export default function TodoList() {
    const [todos, settodos] = useState([]);

    // adding task 
    const addtask = task =>{
        if(!task.text){
            return
        }
       const newTodos = [task, ...todos];
       settodos(newTodos);
    }
    // removing task
    const removetask = id =>{
      let updatedTask = [...todos].filter(task => task.id !== id)
      settodos(updatedTask);

    }
    // marking completed
    const completed = id =>{
      let updatedTask = todos.map(tod => {
        if(tod.id===id){
        tod.isComplete = true;
        }
        return tod;
    
      }  )

      settodos(updatedTask);
    }
  return  <div>
        <Todofrom addtask = {addtask}></Todofrom>
        <Todo todos = {todos} completed = {completed} removetask ={removetask}> </Todo>
    </div>
  
}
