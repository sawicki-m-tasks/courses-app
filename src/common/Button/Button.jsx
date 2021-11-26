import './Button.css';

export default function Button(props) {

  return (
    <button className="baseButton headerButton" onClick={props.onClick}>
      { props.buttonText }
    </button>
  );
}