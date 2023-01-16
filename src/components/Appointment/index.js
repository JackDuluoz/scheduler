
import React from 'react';
import "./styles.scss";

// import Confirm from './Confirm';
import Empty from './Empty';
// import Error from './Error';
import Form from './Form';
import Header from './Header';
import Show from './Show';
// import Status from './Status';

import useVisualMode from 'hooks/useVisualMode';

const Appointment = (props) => {

  const CREATE = "CREATE";
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (

    <article className="appointment">
      <Header
        time={props.time}
      />
      {mode === EMPTY && (
        <Empty
          onAdd={() => transition(CREATE)}
        />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={""}
          onCancel={() => back()}
        />
      )}

    </article>

  );

}
 
export default Appointment;