import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import taskReducer from "./task";

const rootReducer = combineReducers({
  task: taskReducer,
});

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
  // eslint-disable-next-line prettier/prettier
  > = ThunkAction<R, AppStateType, unknown, A>;
type RootReducer = typeof rootReducer;
export type AppStateType = ReturnType<RootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
