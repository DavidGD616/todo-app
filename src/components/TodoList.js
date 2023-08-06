function TodoList(props) {
    return (
        <div className="container">
        <ul>
            {props.children}
        </ul>
        </div>
    )
}

export { TodoList };