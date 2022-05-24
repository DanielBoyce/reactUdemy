import "./Card.css";

function Card(props) {
  let combineClasses = "card " + props.className;
  return <div className={combineClasses}>{props.children}</div>;
}

export default Card;
