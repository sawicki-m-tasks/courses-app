import './Textarea.css';

export default function Textarea(props) {
  return (
    <div className="textareaContainer">
      {props.labelText && <label htmlFor={props.id}>{props.labelText}</label>}
      <textarea onChange={props.onChange} value={props.inputValue} type="text" id={props.id} placeholder={props.placeholderText}/>
    </div>
  )
}