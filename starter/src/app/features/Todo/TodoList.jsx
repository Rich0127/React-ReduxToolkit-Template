import React from 'react';
import TodoItem from './TodoItem';
import TodoItemSelect from './TodoItemSelect';
import { useSelector } from 'react-redux';
// import SelectAll from './EffectCompenet/SelectAll';

const TodoList = () => {
	const todos = useSelector((state) => state.todos);
	const todos_1 = todos.filter((item) => item.id === 0)
	const todos_2 = todos.filter((item) => item.id !== 0)
	return (
		<ul className='list-group'>
			{todos_1.map((todo) => (
				<TodoItemSelect id={todo.id} title={todo.title} completed={todo.completed} />
			) )}
			{todos_2.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
