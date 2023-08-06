import React from "react";

function TodoSearch({
  searchValue,
  setsearchValue,
}) {
    return (
      <div className="container">
      <input
      className="search"
      value={searchValue}
      placeholder="Cortar cebolla"
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}
       />
      </div>
    )
  }

export { TodoSearch };
  