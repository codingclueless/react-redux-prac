import { createStore } from 'redux';
import reducer from './reducers/index';
import { ADD_DRINKS, addDrinks, ADD_DRINKS_NAME, addDrinksName, addSandwiches, ADD_SANDWICHES, ADD_CHIPS, addChips } from './actions/lunchActions'


// creating the initial STATE
const initialState = {
  drinks: 0,
  drinksName: [],
  chips: 0,
  sandwiches: 0
};


// create the function for actions (name is anything)
function reducer(state = initialState, action) {
  console.log('action received', action);
  switch(action.type) {
    case ADD_DRINKS:
      return { ...state, drinks: state.drinks + 1 };
    case ADD_DRINKS_NAME:
      return { ...state, drinksName: [...state.drinksName, action.payload] };
    case ADD_CHIPS:
      return { ...state, chips: state.chips + 1 };
    case ADD_SANDWICHES:
      return { ...state, sandwiches: state.sandwiches + 1 };
    case 'REMOVE_DRINKS':
      return { ...state, drinks: state.drinks - 1 };
    case 'REMOVE_CHIPS':
      return { ...state, chips: state.chips - 1 };
    case 'REMOVE_SANDWICHES':
      return { ...state, sandwiches: state.sandwiches - 1 };
    default:
      return state;
  }
}

// create a variable to store updated state(reducer, initial state));
const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});


console.log('phase 1 initial', store.getState());

// dispatch to update the store
store.dispatch(addDrinksName('pepsi'));
store.dispatch(addDrinks());

console.log('phase 2 dispatched', store.getState());



