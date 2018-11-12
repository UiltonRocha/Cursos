console.clear()
const {createStore} = Redux;
//import {createStore} from 'redux'

const SET_VALUE = 'SET_VALUE';

//action creators | criador de ações
const setValue = value => ({
  type: SET_VALUE,
  value
})
const DECREMENT_VALUE = 'DECREMENT_VALUE';
const decrementValue = (decrement = 1) => ({
  type: DECREMENT_VALUE,
  decrement
})

//reducer é uma função que recebe o state e a ection e retorna um newState (state action -> newState)
const reducer = (state = 0, action) => {
  switch(action.type){
    case SET_VALUE:
      return action.value;
    case DECREMENT_VALUE:
      return state - action.decrement;
    default:
      return state;
  }
};

const store = createStore (reducer);

store.subscribe(() => {
  console.log(store.getState())
})

//action creators | criador de ações
store.dispatch(setValue(50));

store.dispatch(setValue(100));

store.dispatch(decrementValue(5))
store.dispatch(decrementValue())


