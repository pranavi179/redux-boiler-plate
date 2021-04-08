import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, increment5 } from './actions/index';

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Counter {counter}</h2>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				{' '}
				+{' '}
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				{' '}
				-{' '}
			</button>
			<button
				onClick={() => {
					dispatch(increment5(5));
				}}
			>
				{' '}
				+5{' '}
			</button>
			{isLogged ? <h3>not logged in</h3> : ''}
		</div>
	);
}

export default App;
