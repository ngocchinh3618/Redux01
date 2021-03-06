const redux = require("redux");
const createStore = redux.createStore;

const intialState = {
  counter: 0
}
//reducer
const rootReducer = (state = intialState, action) =>{
  if(action.type === "INC_COUNTER"){
    return{
      ...state,
      counter: state.counter + 2
    };
  }
  if(action.type === "ADD_COUNTER"){
    return{
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
}
// store
  const store = createStore(rootReducer);
  console.log(store.getState());

  // Subscription 
  
  store.subscribe(()=>{
    console.log("[subscription]", store.getState());
  })
// Dispatching Action
store.dispatch({type:"INC_COUNTER"});
// store.dispatch({type:"ADD_COUNTER", value: 10});
console.log(store.getState());
