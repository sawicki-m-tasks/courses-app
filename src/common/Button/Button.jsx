import './Button.css';

export default function Button(props) {

  const handleClick = (e) => {
    console.log('disabled: ', props.disabled)
    if(!props.disabled) {
      props.onClick(e);
    }
  }

  return (
    <button className="baseButton headerButton" onClick={handleClick}>
      { props.buttonText }
    </button>
  );
}