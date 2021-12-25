import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Task = ({content}) => {
  return (
    <div className="task">
      <p> {content} </p>
    </div>
  );
};
export default Task;
