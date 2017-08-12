var hello = "dsd";
console.log(' this is the loine ');
var React = require('react');
var ReactDOM = require('react-dom');
/**
3.   Trying out simple things from the redux world

  just creating a store and using dispatch and subscribe
*/

console.log('click on the window anywhere');
// got the same redux counter
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//
// // since react 14, this way of initializing simple components from direct functions is enabled.
// // so using it :)  .. still remember , only one parent element can be returned
// // const Counter = ({ value, onIncrement, onDecrement}) => (
// //   <div>
// //     <h1>{value}</h1>
// //     <button onClick={onIncrement}> + </button>
// //     <button onClick={onDecrement}> - </button>
// //   </div>
// // );
//
// // The above way is not working for some reason, utill it does, let me just go aheaf with a class
//
// // hopefully JSX applies on this one
// /** @jsx React.DOM */
// class Counter extends React.Component {
//   render() {
//     return <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}> + </button>
//         <button onClick={onDecrement}> - </button>
//       </div>;
//   }
// };
//
// // first get the createStore from redux will allow all the 3 princliples of redux to be enforced
// const { createStore } = Redux;
// // then add a reducer function to it, which you have to maipulate the store
// const store = createStore(counter);
//
// // Just a method to deal with the UI
// const render = () => {
//   ReactDom.render(
//     <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//     onDecrement={() => store.dispatch({type: 'DECREMENT'})} />,
//     document.getElementById('root');
//   )
// };
//
// // Calling for the first time
// render();
// // and then everytime a state change is made
// store.subscribe(render);
//
// // Listenting to the click event
// document.addEventListener('click', () => {
//   store.dispatch({type: 'INCREMENT'});
// });
