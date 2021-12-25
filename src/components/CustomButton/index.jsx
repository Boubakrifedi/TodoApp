import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomButton = ({color,display,onClick,content}) => {
  return (
    <Button style={{ backgroundColor: color, display: display}} onClick={onClick}>{content}</Button>
  )
}
export default CustomButton