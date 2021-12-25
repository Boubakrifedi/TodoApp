import 'bootstrap/dist/css/bootstrap.min.css';
import {BsPlusLg} from "react-icons/bs";
import {BsTrashFill} from "react-icons/bs";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Task from "../../components/Task";
import "./index.css";
 import TodoFooter from "../../components/TodoFooter";
const TodoContainer = () => {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) =>{
    setValue(e.target.value)
  }
  const handleClick = () => {
    if (!value) return;
    setTasks([...tasks, value]);
    setValue("");
   
  }
  const handledelete = (index) => {
    setTasks(tasks.filter((item, itemIndex) => index !== itemIndex));
    
     }
     const handledeleteall = () => {
      setTasks([]);
    }
  return (
      <section id="container">
        <h1>TODO APP</h1>
        <div id="test">
        <CustomInput onChange = {handleChange} value={value}/>  
        <div className="button">
        <CustomButton color='#8f4be8'  display="inline-block" onClick = {handleClick} content = {<BsPlusLg/>}/>
        </div>
        </div>
         {tasks.map((item, index) => (
           <div className="delete" key={index}>
          <Task  content = {item} /> 
          <div className="button">
        <CustomButton color='red' onClick={() => handledelete(index)} content = {<BsTrashFill/>}/>
        </div>
          </div>
        ))}
         <div id="footer">
          <TodoFooter numberOfTasks = {tasks.length}/>
          {tasks.length>0 &&
          <div className="button">
        <CustomButton color='red' display="inline-block" onClick={handledeleteall} content = 'clear all'/>
        </div>
}
        </div> 
           
      </section>
        );
};
export default TodoContainer;
