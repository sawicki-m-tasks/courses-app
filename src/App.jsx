import { useState } from 'react';

import './App.css';

import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';


function App() {
  const [coursesView, setCoursesView] = useState(true);

  const switchViews = () => {
    setCoursesView(!coursesView);
  }

  return (
    <div className="app">
      <Header/>
      {coursesView ? <Courses newCourseHandler={switchViews}/> : <CreateCourse viewSwitch={switchViews}/>}
    </div>
  );
}

export default App;

