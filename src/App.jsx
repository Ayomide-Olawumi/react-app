import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Hello from  "./components/Hello.jsx"
import Todo from  "./components/Todo.jsx"
import Dashboard from "./components/Dashboard.jsx"
import Signup from "./components/Signup.jsx";
import Studentform from "./components/Studentform.jsx";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Studentform />
      {/* <Signup/> */}
      {/* <Dashboard/> */}
      {/* { <Hello/>} */}
      {/* <button onClick={notify}>Notify!</button>
      <Todo/>
      <ToastContainer /> */}
    </div>
  );
}

export default App;