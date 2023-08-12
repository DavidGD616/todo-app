import React from "react";
import { TodoContext } from "../context";

function TodoSearch() {
  const {
    searchValue,
    setsearchValue,
  } = React.useContext(TodoContext)
    return (
      <div className="container">
      <input
      className="search"
      value={searchValue}
      placeholder="Buy groceries"
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}
       />
      </div>
    )
  }

export { TodoSearch };
  