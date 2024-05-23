import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

const rootReducer=combineReducers({
auth:authReducer,
product:customerProductReducer,
Cart:cartReducer,
order:orderReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))