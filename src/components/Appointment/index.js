
import React from 'react';
import "./styles.scss";

import Empty from './Empty';
import Header from './Header';
import Show from './Show';

const Appointment = (props) => {



  return (

    <article className="appointment">
      <Header
        time={props.time}
      />
      {(props.interview) ?
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
        :
        <Empty />}
    </article>

  );

}
 
export default Appointment;