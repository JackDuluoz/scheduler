import React, { useEffect } from "react";
import axios from "axios";
import Appointment from "components/Appointment";
import DayList from "./DayList";
import useApplicationData from "hooks/useApplicationData";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";
import "components/Application.scss";

function Application() {
  const {
    state,
    setState,
    setDay,
    bookInterview,
    deleteInterview,
    editInterview,
  } = useApplicationData();

  useEffect(() => {
    const daysURL = `http://localhost:8001/api/days`;
    const apptsURL = `http://localhost:8001/api/appointments`;
    const interviewersURL = `http://localhost:8001/api/interviewers`;
    Promise.all([
      axios.get(daysURL),
      axios.get(apptsURL),
      axios.get(interviewersURL),
    ]).then((all) => {
      let dbDays = all[0].data;
      let dbAppointments = all[1].data;
      let dbInterviewers = all[2].data;
      setState((prev) => ({
        ...prev,
        days: dbDays,
        appointments: dbAppointments,
        interviewers: dbInterviewers,
      }));
    });
  }, [setState]);

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        deleteInterview={deleteInterview}
        editInterview={editInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

export default Application;
