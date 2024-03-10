import React, { useState } from 'react';

function List() {
  const [tasks, setTasks] = useState(["coffee","breakfast","do nothing ",]);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(event) {
    setNewTask(event.target.value);
  }

  return (
    <div id="todolist">
    <div >
      <h1>TO-DO-LIST</h1>
      <ol >
        {tasks.map((task,index)=> 
        <li key={index}><b>{task}</b>
        <button>Delete </button>
        <button id='moveup'>👆 </button>
        <button id='movedown'> 👇</button>
        </li>)}
      </ol>
     <div className="inpbtttn">
        <input type="text" placeholder='Enter the new task' />
        <button id='addbttn'> Add </button>
     </div>
    </div>
    </div>
  );
}

export default List;
