import './Input.css';

export default function Input(props) {
  return (
    <div className="inputContainer">
        {props.labelText && <label htmlFor={props.id}>{props.labelText}</label>}
        <input onChange={props.onChange} value={props.value} type={props.type} id={props.id} placeholder={props.placeholderText}/>
    </div>
  );
}