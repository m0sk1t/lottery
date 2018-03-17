import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import createSagaMiddleware from "redux-saga";

import user from "./user";
import sagas from "./sagas";
import goods from "./goods";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    user,
    goods,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;