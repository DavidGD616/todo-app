import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setsearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <> 
          <TodoCounter
            completed={completedTodos}
            total={totalTodos}/>
          <TodoSearch
            searchValue={searchValue}
            setsearchValue={setsearchValue}
          />
    
          <TodoList>
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Desesperate, hubo un error!!!!!</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>}

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
    
          <CreateTodoButton />
    
        </>
      );
}

export { AppUI };