import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { Modal } from "../components/Modal";
import { TodoContext } from "../context";

function AppUI() {
  const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
   } = React.useContext(TodoContext)

    return (
        <>
          <TodoCounter />
          <TodoSearch/>
             <TodoList>
             {loading && (
               <>
               <TodosLoading />
               <TodosLoading />
               <TodosLoading />
               <TodosLoading />
               <TodosLoading />
               </>
             )}
             {error && <TodosError />}
             {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

             {searchedTodos.map(todo => (
               <TodoItem
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
               />
               ))}
             </TodoList>

          <CreateTodoButton
            setOpenModal={setOpenModal}
          />

          {openModal && (
            <Modal />
          )}

        </>
      );
}

export { AppUI };