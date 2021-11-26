import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.css';

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <Input type="text" onChange={props.onChange} value={props.inputValue} id="search" placeholderText="Enter course name or id..."/>
      <Button buttonText="Search" onClick={props.onSearch}/>
    </div>
  );
}