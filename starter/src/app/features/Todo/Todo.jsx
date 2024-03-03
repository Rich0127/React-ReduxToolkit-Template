import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TotalCompleteItems from "./TotalCompleteItems";

export const Todo = () => {
    return (
        <>
            <AddTodoForm />
            <TodoList />
            <TotalCompleteItems />
        </>
    )
}

export default Todo;