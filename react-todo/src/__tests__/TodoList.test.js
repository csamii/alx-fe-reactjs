import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Demo todos for testing
const demoTodos = [
  { id: 1, title: "Study React", completed: true },
  { id: 2, title: "Build Todo App", completed: true },
  { id: 3, title: "Test Components", completed: false },
];

describe("TodoList Component", () => {
  test("renders the todo list with initial demo todos", () => {
    render(
      <TodoList
        todos={demoTodos}
        onToggle={jest.fn()}
        onRemove={jest.fn()}
      />
    );

    // Verify that all todo titles appear
    expect(screen.getByText("Study React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
    expect(screen.getByText("Test Components")).toBeInTheDocument();

    // Verify completed state is reflected (e.g., checkbox checked)
    const completedTodo = screen.getByText("Build Todo App");
    expect(completedTodo).toHaveClass("line-through"); // our styling for completed

    // Verify number of rendered list items matches todos
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(demoTodos.length);
  });
});
