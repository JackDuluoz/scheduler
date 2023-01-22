import React from "react";
import "./styles.scss";

import Confirm from "./Confirm";
import Empty from "./Empty";
import Error from "./Error";
import Form from "./Form";
import Header from "./Header";
import Show from "./Show";
import Status from "./Status";

import useVisualMode from "hooks/useVisualMode";

const Appointment = (props) => {
  const CONFIRM = "CONFIRM";
  const CREATE = "CREATE";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const EMPTY = "EMPTY";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const SAVING = "SAVING";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => {
        transition(ERROR_SAVE);
      });
  };

  const deleteAppt = function () {
    transition(DELETING, true);
    props
      .deleteInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => {
        transition(ERROR_DELETE, true);
      });
  };

  const editAppt = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .editInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => {
        transition(ERROR_SAVE);
      });
  };

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={editAppt}
          onCancel={() => back()}
        />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETING && <Status message={"Deleting"} />}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you would like to delete this appointment?"}
          onCancel={() => back()}
          onConfirm={deleteAppt}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error message={"Could not save appointment."} onClose={() => back()} />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message={"Could not delete appointment."}
          onClose={() => back()}
        />
      )}
    </article>
  );
};

export default Appointment;
