import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const todo = () => {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const Addtodo = () => {
    if (!todo)
      // return alert("Fill this field")
      return toast.error("Kindly input a todo");

    setTodoArray([...todoArray, todo]);
    console.log(todoArray);

    toast.success("Todo added!!");
  };

  const handleDelete = (index) => {
    const newArray = [...todoArray];

    newArray.splice(index, 1);

    setTodoArray(newArray);
  };

  const deleteWithFilter = (index) => {
    console.log(index);

    setTodoArray(todoArray.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    console.log(index);
  };

  return (
    <>
      <div>Todo</div>
      <h1>What are you doing today?</h1>
      <input
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
        type="text"
      />
      <button onClick={Addtodo}>Addtodo</button>

      {todoArray.map((todo, index) => (
        <div>
          <h1>{todo}</h1>
          <button
            onClick={() => {
              handleEdit(index);
            }}
          >
            Edit
          </button>
          {/* <button onClick={() => {handleDelete(index)}}>Delete</button> */}
          <button
            onClick={() => {
              deleteWithFilter(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}

      <ToastContainer />
    </>
  );
};

export default todo;
