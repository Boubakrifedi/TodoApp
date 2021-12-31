import 'bootstrap/dist/css/bootstrap.min.css';
import { BsPlusLg } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import React from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Task from "../../components/Task";
import "./index.css";
import TodoFooter from "../../components/TodoFooter";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setInputVal, setTasksData, deleteTask, deleteTaskAll } from "./actions";
const TodoContainer = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((store) => store.todoState);
  const handleChange = (val) => {
    console.log(todoData.inputVal)
    dispatch(setInputVal(val));
  };
  const handleClick = (from, index) => {
    switch (from) {

      case "add":
        if (!todoData.inputVal) return;
        dispatch(setTasksData(todoData.inputVal));
        console.log("add")
        break;

      case "clear_task":
        dispatch(deleteTask(index));
        break;

      case "clear_all":
        dispatch(deleteTaskAll())
        break;
      default:
        break;
    }
  };
  return (
    <section id="container">
      <h1>TODO APP</h1>
      <div id="test">
        <CustomInput onChange={(e)=>handleChange(e.target.value)}  value={todoData.inputVal}/>
        <div className="button">
          <CustomButton color='#8f4be8' display="inline-block" onClick={() => handleClick("add")} content={<BsPlusLg />} />
        </div>
      </div>
      {todoData.tasksData.map((item, index) => (
        <div className="delete" key={index}>
          <Task content={item} />
          <div className="button">
            <CustomButton color='red' onClick={() => handleClick("clear_task", index)} content={<BsTrashFill />} />
          </div>
        </div>
      ))}
      <div id="footer">
        <TodoFooter numberOfTasks={todoData.tasksData.length} />
        {todoData.tasksData.length > 0 &&
          <div className="button">
            <CustomButton color='red' display="inline-block" onClick={() => handleClick("clear_all")} content='clear all' />
          </div>
        }
      </div>

    </section>
  );
};
export default TodoContainer;
