import React from "react";

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul style={{display: "flex"}}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
        >
          {/* <div> */}
            {/* Checkbox for toggling */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </span>
          {/* </div> */}

          {/* Delete button */}
          <button
            className="text-red-500"
            onClick={() => onRemove(todo.id)}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
