import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { buttonText, inputText } from '../../../../constants';

import './SearchBar.css';

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <Input type="text" onChange={props.onChange} value={props.inputValue} placeholderText={inputText.search.placeholder} labelText={inputText.search.label} />
      <Button buttonText={buttonText.search} onClick={props.onSearch}/>
    </div>
  );
}