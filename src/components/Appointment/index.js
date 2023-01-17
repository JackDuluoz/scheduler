
import React from 'react';
import "./styles.scss";

// import Confirm from './Confirm';
import Empty from './Empty';
// import Error from './Error';
import Form from './Form';
import Header from './Header';
import Show from './Show';
import Status from './Status';

import useVisualMode from 'hooks/useVisualMode';

const Appointment = (props) => {

  const CREATE = "CREATE";
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW)
    })
    
  }

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
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === SAVING && (
        <Status
          message={"Saving"}
        />
      )}

    </article>

  );

}
 
export default Appointment;