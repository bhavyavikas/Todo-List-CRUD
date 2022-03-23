import React from "react";

const Todolist = ({ todo, setTodo, setEditTodo }) => {

    const handleComplete = (td) => {
        setTodo(
            todo.map((item) => {
                if (item.id === td.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todo.find((td) => td.id === id);
        setEditTodo(findTodo)
    }

    const handleDelete = ({ id }) => {
        setTodo(todo.filter((td) => td.id !== id))
    }
    return (
        <div>
            {todo.map((td) => (
                <li className='todo-list' key={td.id}>
                    <input type="text"
                        value={td.title}
                        className={`list ${td.completed ? 'complete' : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div className="todo-icon">
                        <button className="check-button task-button"
                            onClick={() => handleComplete(td)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="edit-button"
                            onClick={() => handleEdit(td)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className="delete-button"
                            onClick={() => handleDelete(td)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            )
            )}
        </div>
    );
}

export default Todolist;