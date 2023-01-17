import React, { useEffect } from "react";
import axios from 'axios'
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment"; 
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

// import getInterview from "helpers/selectors";

// Example Components
// import ExampleComponent from "./examples/ExampleComponent"
// import State from "./examples/State";
// import List from "./examples/List";

// A Component is a Javascript Function

// This is the root component -- the first component that gets rendered to the DOM.
// It sits at the top of the component tree.  

// Further components get nested in this root component.

// The component/function name starts with a capital letter.
function Application() {

  // Javascript 

  // Strings, numbers, and arrays work fine in the curly braces below, but booleans and objects will not work.

  // const javascriptString = "Use squirly brackets to see this";
  // const javascriptNumber = 33;
  // const javascriptArray = [4, "a thing", 77, "another thing"]

  // const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"


  // When we talk about the 'state' of a component we mean the data being used in that component
  // at that point in time. The data can be strings, numbers, arrays, objects, booleans, etc.

  //We use state when we want variables or data to change over time or in reaction to user events (eg clicks, form inputs).
  const {
    state,
    setState,
    setDay,
    bookInterview,
    deleteInterview,
    editInterview
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
      let dbDays = all[0].data
      let dbAppointments = all[1].data
      let dbInterviewers = all[2].data
      setState(prev => ({ ...prev, days: dbDays, appointments: dbAppointments, interviewers: dbInterviewers }));
    });    
  }, [setState])

  const dailyAppointments = getAppointmentsForDay(state, state.day)
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
    )
  })

  // While useState runs every time the state (data) of a variable changes, useEffect runs every time the page renders. 
  // useEffect(() => {
  //   console.log("This useEffect runs on every render.")
  // })

  // We may not always want useEffect to run on every render--only certain renders.

  // This can be achieved by using a 'dependency array', which is an array that is passed into the useEffect hook
  // as a second argument.
  // useEffect(() => {
  //   console.log("This useEffect runs on the intial render only because of the empty dependency array.")
  // }, [])
  //Passing in an empty array means the useEffect hook will only run on the initial page render.
  //Thereafter, if the state changes, the function will not run.

  // Dependencies in the array pertain to specific state values and tell the useEffect hook to run
  // only when the state of these specific states change.
  // useEffect(() => {
  //   console.log("This useEffect runs on the initial render. Thereafter, it only runs when the state of the dependency 'day' changes.")
  // }, [day])

  // Example. See commented out button in schedule section in the return statement to test.
  // const [name, setName] = useState('Michael')
  // useEffect(() => {
  //   console.log(`Name changed to: ${name}.`)
  // }, [name])


  // Javascript

  return (

    // JSX Template

    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>

        {/* { Curly Braces Contain Javascript } */}
        {/* <p>{javascriptString}<br></br>{javascriptNumber}<br></br>{ javascriptArray }</p> */}

        {/* <a href={ link }>Rick Roll Me</a> */}

        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>

      <section className="schedule">

        {/* <button onClick={() => {
          if (name === 'Michael') { setName('Green') }
          else { setName('Michael') }
        }}
        >Change Name
        </button>
        <p>{name}</p> */}

        {schedule}
        <Appointment key="last" time="5pm" />
        
      </section>

    </main>    

    // JSX Template
    
  );

}

export default Application;
// Export Application Component

// A component is a function, and we must always return something inside that function.
// Generally, the return will be a JSX template.
// The component (function) must then be exported for use elsewhere.