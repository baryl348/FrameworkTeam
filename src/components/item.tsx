/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Checkbox, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { getTask } from "../redux/task";

interface PropsType {
  id: number;
  text: string;
  removeTask: (id: number) => void;
  getTask: () => void;
  updateTask: (id: number, text: string) => void;
}

const useStyles = makeStyles((theme) => ({
  inputItem: {
    borderColor: "blue",
    width: theme.spacing(55),
    paddingLeft: theme.spacing(3)
  },
  cancel: {
    color: "red",
    cursor: "pointer",
    float: 'right'
  },
  successInputItem: {
    textDecoration: "line-through",
  },
  spanValue: {
    width: theme.spacing(50),
    paddingLeft: theme.spacing(3)
  },
}));

const Item: React.FC<PropsType> = ({ text, id, removeTask, updateTask }) => {
  const [edit, setEdit] = useState(false);
  const [valueIn, setValueIn] = useState(text);
  const [check, setCheck] = useState(false);
  const activateEditMode = () => {
    setEdit(true);
  };
  const deactivatEditMode = () => {
    setEdit(false);
    updateTask(id, valueIn);
  };
  const checks = () => {
    setCheck(check ? false : true);
  };

  const deletes = () => {
    removeTask(id);
    getTask()
  };
  const classes = useStyles();
  return (
    <div>
      <Checkbox name="checkedA" onClick={checks} />
      {edit ? (
        <TextField
          className={classes.inputItem}
          value={valueIn}
          onBlur={deactivatEditMode}
          autoFocus={true}
          onChange={(e) => setValueIn(e.target.value)}
        />
      ) : (
          <span
            onClick={activateEditMode}
            className={
              classes.spanValue + " " + (check ? classes.successInputItem : "")
            }
          >
            {valueIn || "------"}
          </span>
        )}
      <ClearIcon className={classes.cancel} onClick={deletes} />
    </div>
  );
};
export default Item;
