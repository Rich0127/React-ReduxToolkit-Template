import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id: 0, title: "Select All", completed: false },
    {id: 1, title: "todo1", completed: false },
    {id: 2, title: "todo2", completed: false },
    {id: 3, title: "todo3", completed: false },
    {id: 4, title: "todo4", completed: false },
    {id: 5, title: "todo5", completed: false },
];
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: state.length+1,
                title:action.payload.title,
                completed:false,
            }
            state.push(todo);
        },
        changeTodoTitle: (state, action) => {
            const changeIndex = state.findIndex((item) => item.id=== action.payload.id);
            state[changeIndex].title = action.payload.changeValue;
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((item) => item.id=== action.payload.id);
            if (index === 0) {
                state.map((item) => item.completed = action.payload.completed)
            } else {
                state[index].completed = action.payload.completed;
            }
            if (index !== 0) {
                state[0].completed = false;
            }
        },
        deleteTodo: (state, action) => {

            
            if (action.payload.id === 0 ) {
                if (state[0].completed === true) {
                    return state.filter((item) => item.id === 0) 
                }
            } else {
                return state.filter((item) => item.id !== action.payload.id);
            }
        }, 
    }
})

export const { addTodo, toggleComplete, deleteTodo, changeTodoTitle, checkAllTodo } = todoSlice.actions;

export default todoSlice.reducer;