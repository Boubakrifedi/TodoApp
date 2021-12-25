import 'bootstrap/dist/css/bootstrap.min.css';
const TodoFooter = ({numberOfTasks}) => {
    return (
        <div className="footer">
            <p>You have {numberOfTasks} pending tasks</p>
        </div>
    )
}
export default TodoFooter;