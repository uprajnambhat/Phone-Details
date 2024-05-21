import { combineReducers, createStore } from "redux";
import { phoneDetails } from "./json-phone-details";
import { brandReducer } from "./Brand/reducers/brandReucer";

const phoneReducers = combineReducers({
  phoneDetails: brandReducer,
});

const store = createStore(phoneReducers);

export default store;
