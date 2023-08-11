import React from "react";
import { TodoContext } from "../context"

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="ModalBackground-box">
            <label className="ModalBackground-box__h3">Add Your ToDo</label>
            <textarea
                className="addToDoinput"
                placeholder="Write your ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="ModalBackground-box__buttons">
                <button
                type="button"
                className="ModalBackground-box__buttons-cancel"
                onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                className="ModalBackground-box__buttons-complete"
                >
                    Complete
                </button>
            </div>
        </form>
    )
}

export { TodoForm };