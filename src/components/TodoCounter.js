function TodoCounter({ total, completed }) {
    return (
      <div className="container">
      <h1 className="todoCounter">
        Haz completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
      </div>
    )
  }

export { TodoCounter };