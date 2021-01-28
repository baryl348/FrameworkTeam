/* eslint-disable new-cap */
import { taskUrl } from "../API/api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

export interface taskType {
  id: number;
  text: string;
}

const initialState = {
  task: [] as Array<taskType>,
};

const taskReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "TASK":
      return {
        ...state,
        task: [...action.payload],
      };
    default:
      return state;
  }
};

export const actions = {
  setTask: (tasks: Array<taskType>) => ({ type: "TASK", payload: tasks }),
};

export const getTask = (): ThunkType => async (dispatch) => {
  const taskData = await taskUrl.GetTasks();
  const tasks = taskData;
  dispatch(actions.setTask(tasks));
};
export const addTask = (text: string): ThunkType => async (dispatch) => {
  await taskUrl.PostTask(text);
  dispatch(getTask());
};
export const removeTask = (id: number): ThunkType => async (dispatch) => {
  await taskUrl.DeleteTask(id);
  dispatch(getTask());
};
export const updateTask = (id: number, text: string): ThunkType => async (
  dispatch
) => {
  await taskUrl.PathTask(id, text);
  dispatch(getTask());
};

export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsType>;
type ActionsType = InferActionsTypes<typeof actions>;

export default taskReducer;
