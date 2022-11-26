import "./index.css";

const Task = ({content}, title ) => {
  return (
    <div className="task">
      {/* <h1> {title} </h1> */}
      <p> {content} </p>
    </div>
  );
};
export default Task;
