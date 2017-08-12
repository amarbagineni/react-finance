/**
  1. Trying out the basic of the reducer in this area,

  There is no output, but a humble beginning
*/

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


expect(
  counter(0, {type: "INCREMENT"})
).toEqual(1);

expect(
  counter(1, {type: "DECREMENT"})
).toEqual(0);


expect(
  counter(1, {type: "INCREMENT"})
).toEqual(2);

expect(
  counter(3, {type: "DECREMENT"})
).toEqual(2);

expect(
  counter(0, 'SOMETHING_ELSE')
).toEqual(0)


console.log('Tests Passed ');
