import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Dispatch } from "redux";
import thunk from "redux-thunk";
import commentsReducer from "./comments";
import mapsReducer from "./maps";
import profilesReducer from "./profiles";
import searchReducer from "./search";
import session from "./session";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export interface AppStore {
    dispatch: Dispatch;
}

const rootReducer = combineReducers({
    session,
    profiles: profilesReducer,
    comments: commentsReducer,
    search: searchReducer,
    maps: mapsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
