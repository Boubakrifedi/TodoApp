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
import { setInputVal, setTasksData} from "./actions";
import { createStructuredSelector } from "reselect";
import { makeSelectTasksData, makeSelectInputVal } from "./selectors"; 
import  {todoService} from "../../services/firebaseService";
import { useEffect } from "react";
// import { useState } from 'react';
const tododState = createStructuredSelector({
  tasksData: makeSelectTasksData(),
  inputVal: makeSelectInputVal(),
}); 


const TodoContainer = () => {
  const dispatch = useDispatch();
  const { getAll, create, remove } = todoService("/todo");
  const onDataChange = (items) => {
    let todo = [];

    items.docs.forEach((item) => {
      let id = item.id;
      let data = item.data();
      todo.push({
        id: id,
        task: data.task,
      });
    });
    dispatch(setTasksData(todo))
  };
  useEffect(() => {
    getAll().onSnapshot(onDataChange);
  }, []);
  // const todoData = useSelector((store) => store.todoState);
  const {tasksData,inputVal}= useSelector(tododState);
  const handleChange = (val) => {
    dispatch(setInputVal(val));
  };
  
  const handleClick = (from,index) => {
   
    switch (from) {

      case "add":
        if (!inputVal) return;
        // dispatch(setTasksData(inputVal));
        const data ={task : inputVal}
        create(data);
        break;

      case "clear_task":
        // dispatch(deleteTask(index));
        remove(index)
        break;

      case "clear_all":
        // dispatch(deleteTaskAll())
        tasksData &&
              tasksData.forEach((item) => {
               remove(item.id);
              });
        break;
      default:
        break;
    }
    // setClicked(!clicked)
  };
  
  return (
    <section id="container">
      <h1>TODO APP</h1>
      <div id="test">
        <CustomInput onChange={(e)=>handleChange(e.target.value)}  value={inputVal}/>
        <div className="button">
          <CustomButton color='#8f4be8' display="inline-block" onClick={() => handleClick("add")} content={<BsPlusLg />} />
        </div>
      </div>
      {tasksData && tasksData.length > 0 && tasksData.map((item, index) => (
        <div className="delete" key={index}>
          <Task content={item.task} />
          <div className="button">
            <CustomButton color='red' onClick={() => handleClick("clear_task", item.id)} content={<BsTrashFill />} />
          </div>
        </div>
      ))}
      <div id="footer">
        <TodoFooter numberOfTasks={tasksData&& tasksData.length ? tasksData.length :0} />
        {tasksData.length > 0 &&
          <div className="button">
            <CustomButton color='red' display="inline-block" onClick={() => handleClick("clear_all")} content='clear all' />
          </div>
        }
      </div>
    </section>
  );
};
export default TodoContainer;
