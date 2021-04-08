export const increment = () => {
	return {
		type: 'INCREMENT',
		// payload: num,
	};
};
export const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};
export const increment5 = (num) => {
	return {
		type: 'INCREMENT5',
		payload: num,
	};
};
