import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from './todoSlice';
const TodoItemSelect = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckClick = () => {
		dispatch(toggleComplete({id, completed:!completed}));
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({id}));
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
						type='checkbox' 
						className='mr-3' 
						checked={completed}
						onClick={handleCheckClick}
					></input>
					{title}
				</span>
				<div>
					<button className='btn btn-danger' onClick={handleDeleteClick}>Delete</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItemSelect;
