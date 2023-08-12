import React from "react";
import { TodoContext } from "../context";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
    return (
      <div className="container">
      <h1 className="todoCounter">
      You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOS
      </h1>
      </div>
    )
  }

export { TodoCounter };