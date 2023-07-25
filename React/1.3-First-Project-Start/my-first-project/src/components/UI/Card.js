import '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/UI/Card.css';

function Card(props) {
  const classes = 'card' + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
