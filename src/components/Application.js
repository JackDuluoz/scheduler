import React, { useState } from "react";

// Import Application Component Styling
import "components/Application.scss";

// Import DayList Component
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";

// Example Components
// import ExampleComponent from "./examples/ExampleComponent"
// import State from "./examples/State";
// import List from "./examples/List";

// Hard-Coded Day Objects
// Each item must have a unqiue id key.
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 2,
  },
  {
    id: 4,
    name: "Thursday",
    spots: 3,
  },
  {
    id: 5,
    name: "Friday",
    spots: 1,
  },
  {
    id: 6,
    name: "Saturday",
    spots: 3,
  },
  {
    id: 7,
    name: "Sunday",
    spots: 0,
  }
];

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

// A Component is a Javascript Function

// This is the root component -- the first component that gets rendered to the DOM.
// It sits at the top of the component tree.  

// Further components get nested in this root component.

// The component/function name starts with a capital letter.
function Application(props) {

  // Javascript 

  // Strings, numbers, and arrays work fine in the curly braces below, but booleans and objects will not work.

  // const javascriptString = "Use squirly brackets to see this";
  // const javascriptNumber = 33;
  // const javascriptArray = [4, "a thing", 77, "another thing"]

  // const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"


  // When we talk about the 'state' of a component we mean the data being used in that component
  // at that point in time. The data can be strings, numbers, arrays, objects, booleans, etc.

  //We use state when we want variables or data to change over time or in reaction to user events (eg clicks, form inputs).
  const [day, setDay] = useState("Monday");

  const [interviewer, setInterviewer] = useState(1)

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
            days={days}
            day={day}
            setDay={setDay}
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

        <InterviewerList
          interviewers={interviewers}
          setInterviewer={setInterviewer}
          interviewer={interviewer}
        />
        
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