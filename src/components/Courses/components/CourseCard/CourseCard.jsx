import Button from '../../../../common/Button/Button';
import { buttonText } from '../../../../constants';

import './CourseCard.css';

export default function CourseCard(props) {
  return (
    <div className="courseCard">
      <div className="courseCardDescription">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="courseCardDetails">
        <p className="authors">
          <b>Authors: </b> {props.authors.join(', ')}
        </p>
        <p>
          <b>Duration: </b> {props.duration} hours
        </p>
        <p>
          <b>Created: </b> {props.creationDate.replaceAll('/', '.')}
        </p>
        <Button buttonText={buttonText.showCourse} disabled={true}/>
      </div>
    </div>
  )
}