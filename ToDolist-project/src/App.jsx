import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./Tasks";

//todo app

function App() {
  const [taskinput, setTaskinput] = useState("");
  const [tasks, setTasks] = useState([]); // Array to store multiple tasks

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks"); // Retrieve the tasks from localStorage
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // If tasks are found, parse the JSON and set them
    }
  }, []);

  // Save tasks to localStorage whenever the tasks array changes
  useEffect(() => {
    if (tasks.length > 0) {
      // Ensure we're not saving empty arrays initially
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to localStorage
    }
  }, [tasks]);

  const showTask = () => {
    if (taskinput.trim() !== "") {
      setTasks([...tasks, taskinput]); // Append the new task to the array
      setTaskinput(""); // Clear the input field after adding the task
    }
  };

  // Function to delete a task based on its index
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Create a new array without the deleted task
    setTasks(newTasks); // Update the tasks state
  };

  return (
    <center>
      <div id="layout">
        <br />
        <p id="Heading">My To-Do List</p>
        <br />
        <input
          type="text"
          placeholder="Enter your task"
          value={taskinput} // Controlled input is now linked to taskinput state
          onChange={(e) => setTaskinput(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          id="Add_btn"
          onClick={showTask} // Call showTask when button is clicked
        >
          Add
        </button>
        <br />
        <br />
        <br />
        <h4>My Tasks</h4>
        <br />
        <Tasks data={tasks} deleteTask={deleteTask} />{" "}
        {/* Pass the deleteTask function */}
      </div>
      <br />
      <br />
      <br />
    </center>
  );
}

export default App;
