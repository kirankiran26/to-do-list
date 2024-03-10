import React, { useState, useEffect } from 'react';

function List() {
  const [tasks, setTasks] = useState(["Coffee", "breakfast", "Go to work"]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const emptydiv = document.getElementById("notasktocom");
    if (tasks.length === 0) {
      emptydiv.innerText = "Done for the Day";
    } else {
      emptydiv.innerText = "";
    }
  }, [tasks]);

  function handleNewTask(event) {
    setNewTask(event.target.value);
  }

  const addtask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deletebtn = (index) => {
    const updatedlist = tasks.filter((_, i) => index !== i);
    setTasks(updatedlist);
  };

  const moveup = (index) => {
    if (index !== 0) {
      const updatedlist = [...tasks];
      [updatedlist[index], updatedlist[index - 1]] = [updatedlist[index - 1], updatedlist[index]];
      setTasks(updatedlist);
    }
  };

  const movedown = (index) => {
    const updatedlist = [...tasks];
    if (index !== updatedlist.length - 1) {
      let temp = updatedlist[index];
      updatedlist[index] = updatedlist[index + 1];
      updatedlist[index + 1] = temp;
      setTasks(updatedlist);
    }
  };

  const handeldone = (index) => {
    const updatedlist = tasks.filter((_, i) => i !== index);
    setTasks(updatedlist);
  };

  const clearall = () => {
    setTasks([]);
  };

  return (
    <div id="todolist">
      <div>
        <h1>TO-DO-LIST</h1>
        <h1 id='notasktocom'></h1>
        <ol>
          {tasks.map((task, index) =>
            <li key={index}><b>{task}</b>
              <button onClick={() => { deletebtn(index) }}>Delete </button>
              <button id='moveup' onClick={() => { moveup(index) }}>👆 </button>
              <button id='movedown' onClick={() => { movedown(index) }}> 👇</button>
              <button id='done' onClick={() => { handeldone(index) }}>✅</button>
            </li>)}
        </ol>
        <div className="inpbtttn">
          <input type="text" placeholder='Enter the new task' required value={newTask} onChange={handleNewTask} />
          <button id='addbttn' onClick={addtask}> Add </button>
        </div>
      </div>
      <button id='clearall' onClick={() => { clearall() }}>Clear all </button>
    </div>
  );
}

export default List;
