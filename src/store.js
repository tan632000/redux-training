import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

const myMiddleware = (store) => (next) => (action) => {
  console.log("will dispatch A", action);
  const returnValue = next(action);
  console.log("state after dispatch A", store.getState());
  return returnValue;
};

function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      console.log("will dispatch B", action);
      const returnValue = next(action);
      console.log("state after dispatch B", storeAPI.getState());
      return returnValue;
    };
  };
}

const store = createStore(
  reducer,
  applyMiddleware(myMiddleware, exampleMiddleware)
);

export default store;
