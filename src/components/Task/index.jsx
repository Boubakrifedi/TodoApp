import "./index.css";

const Task = ({content}) => {
  return (
    <div className="task">
      <p> {content} </p>
    </div>
  );
};
export default Task;
