/* eslint-disable react/prop-types */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ItemContainer from "../components/container/item-container";
import { connect } from "react-redux";
import { addTask } from "../redux/task";
interface PropsType {
  addTask: (value: string) => void;
}
// TODO fix style position
const useStyles = makeStyles((theme) => ({
  formButton: {
    marginLeft: theme.spacing(2),
    width: theme.spacing(15),
    height: theme.spacing(7),
    borderColor: "green !important",
    color: "green",
  },
  inputForm: {
    width: theme.spacing(50),
  },
  panel: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    padding: "5px 20px 5px 5px",
    marginTop: theme.spacing(30),
    background: "#DCDCDC",
    borderRadius: 5,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.5)",
  },
  container: {
    position: "relative",
  },
  item: {
    paddingTop: theme.spacing(3),
  },
}));

const List: React.FC<PropsType> = ({ addTask }) => {
  const [value, setValue] = useState({ text: " " });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ text: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onAdd = () => {
    addTask(value.text);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={classes.inputForm}
            label="Task"
            name="task"
            onChange={handleChange}
          />
          <Button
            variant="outlined"
            color="secondary"
            className={classes.formButton}
            type="submit"
            onClick={onAdd}
          >
            Add
          </Button>
        </form>
        <div className={classes.item}>
          <ItemContainer />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addTask })(List);
