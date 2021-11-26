import { useState } from 'react';

import './Courses.css';
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import formatDuration from '../../helpers/pipeDuration';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';

export default function Courses(props) {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
    if(e.target.value === '') {
      setSearchPhrase('');
    }
  }

  const search = (e) => {
    setSearchPhrase(inputValue.toLowerCase());
  }
  
  return (
    <div className="coursesContainer">
      <section className="upperSection">

        <div className="searchBarContainer">
          <SearchBar inputValue={inputValue} onSearch={search} onChange={handleSearchInput}/>
        </div>
        <div className="newCourseContainer">
          <Button buttonText="Add new course" onClick={props.newCourseHandler}/>
        </div>

      </section>
      <section className="coursesSection">

        <div className="coursesListContainer">
          {
            mockedCoursesList.map(course => {
              if(course.title.toLowerCase().includes(searchPhrase) || course.id.toLowerCase().includes(searchPhrase)) {
                const duration = formatDuration(course.duration);
                const authors = course.authors.map(id => mockedAuthorsList.find(author => author.id === id).name);
                return <CourseCard key={course.id}
                            title={course.title} 
                            duration={duration} 
                            creationDate={course.creationDate}
                            description={course.description}
                            authors={authors}/>
              }
            })
          }
        </div>

      </section>
    </div>
  );
}