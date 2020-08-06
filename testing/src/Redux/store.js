import { createStore, combineReducers } from "redux";
import contacts from "./contacts/contactsReducer";

const rootReducer = combineReducers({
  contacts,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
