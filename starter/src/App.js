import React from 'react';
import { Counter } from './app/features/counter/counter';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddTodoForm from './components/AddTodoForm';
// import TodoList from './components/TodoList';
// import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Counter</h1>
			<Counter />
		</div>
	);
};

export default App;
