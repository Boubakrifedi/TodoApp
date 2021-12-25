import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomInput = ({onChange,value}) => {
  return (
    <input
      placeholder="Add your new todo"
      onChange={onChange}
      value={value} />
  );
};
export default CustomInput;
