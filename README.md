#Redux Boiler Plate
Inspired by the DEV Ed youtube channel

Redux -- State container
store -- The store is globalised state , can access anywhere in app
action -- what you want to do
reducer--describes how your actions transform the state into next state
dispatch-- excute the action

# 1. store stays in index.js

import { createStore } from 'redux';
const myStore = createStore(
allReducers,  
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
);

# 2. Reducers

can create many components
Using switch , case statement and having intialized with state and action. and Returns a object
ex:-
const isLoggedInReducer = (state = false, action) => {
switch (action.type) {
case 'SIGNIN':
return !state;
default:
return state;
}
};
export default isLoggedInReducer;

combineReducer == combine all reducers

#3 actions
Says what to do
returns the type and payload

ex:
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

Dispatch
Dispatch in App.js file
it excutes the action
useSelector- hooks to access the redux store
ex:
const dispatch = useDispatch();
const counter = useSelector((state) => state.counter);

<h2>Counter {counter}</h2>

<button
onClick={() => {
dispatch(increment());
}} >
+{' '}
</button>

#final step
wrap it up
use Provider in index.js and wrap App.js in it
<Provider store={myStore}>
<App />
</Provider>
Provider ==Makes the Redux store available to the connect() calls in the component hierarchy below.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
