/**
2.   Trying out simple things from the redux world

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

// first get the createStore from redux will allow all the 3 princliples of redux to be enforced
const { createStore } = Redux;
// then add a reducer function to it, which you have to maipulate the store
const store = createStore(counter);

// Just a method to deal with the UI
const render = () => {
  document.getElementById('root').innerHTML = store.getState();
};

// Calling for the first time
render();
// and then everytime a state change is made
store.subscribe(render);

// Listenting to the click event
document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
