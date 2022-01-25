import { Progress } from "react-bootstrap";
function Skill(props) {
  return (
    <div>
      <label style={{ "margin-bottom": "10px" }}>{props.text}</label>
      <Progress
        percent={props.percent}
        active
        size="small"
        color={props.color}
      ></Progress>
    </div>
  );
}
export default Skill;
