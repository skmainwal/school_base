import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import studentReducer from "../reducers/studentReducer";
import combineReducers from "../reducers/rootReducer";

const store = createStore(combineReducers, composeWithDevTools());

export default store;
