/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getTask, removeTask, taskType, updateTask } from "../../redux/task";
import Item from "../item";

interface MapStateType {
  tasks: Array<taskType>;
}
interface MapDispatchType {
  getTask: () => any;
  removeTask: (id: number) => void;
  updateTask: (id: number, text: string) => void;
}

const ItemContainer: React.FC<MapStateType & MapDispatchType> = (props) => {
  const [task, setTask] = useState(null);
  if (task == null) {
    setTask(props.getTask());
  }
  const Component = props.tasks.map((item) => (
    <Item
      id={item.id}
      text={item.text}
      removeTask={props.removeTask}
      getTask={props.getTask}
      key={item.id}
      updateTask={props.updateTask}
    />
  ));
  return <div>{Component}</div>;
};
const mapStateToProps = (state: AppStateType) => {
  return {
    tasks: state.task.task,
  };
};
export default connect(mapStateToProps, { getTask, removeTask, updateTask })(
  ItemContainer
);
