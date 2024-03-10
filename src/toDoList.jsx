import React, { useState } from 'react';

function List() {
  const [tasks, setTasks] = useState(["coffee","breakfast","do nothing ",]);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(event) {
    setNewTask(event.target.value);
  }
  const addtask = () => {
    if(newTask.trim()!=="") {
    setTasks((t)=>[...t,newTask]);
    setNewTask("")
    }
    
  };
  const emptydiv=document.getElementById("notasktocom")
  const deletebtn= (index) => {
    const updatedlist=tasks.filter((_,i)=>index!==i);
    if (updatedlist.length===0) {
      emptydiv.innerText="Done for the day"
    }
    setTasks(updatedlist)
  }

  return (
    <div id="todolist">
    <div >
      <h1>TO-DO-LIST</h1>
      <h1 id='notasktocom'></h1>
      <ol >
        {tasks.map((task,index)=> 
        <li key={index}><b>{task}</b>
        <button onClick={()=>{deletebtn(index)}}>Delete </button>
        <button id='moveup'>👆 </button>
        <button id='movedown'> 👇</button>
        </li>)}
      </ol>
     <div className="inpbtttn">
        <input type="text" placeholder='Enter the new task' required value={newTask} onChange={handleNewTask} />
        <button id='addbttn' onClick={addtask}> Add </button>
        
     </div>
    </div>
    </div>
  );
}

export default List;
