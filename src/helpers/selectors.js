
const getAppointmentsForDay = function(state, day) {
  let appointmentsForDay = []
  for (let weekday of state.days) {
    if (weekday.name === day) {
      const ids = weekday.appointments
      for (let id of ids) {
        for (let appointment in state.appointments) {
          if (id === Number(appointment)) {
            appointmentsForDay.push(state.appointments[appointment])
          }
        }
      }
    }   
  }
  return appointmentsForDay  
}

const getInterview = function(state, interview) {
  let output = {}
  if (!interview) {
    return null
  }
  output["student"] = interview.student
  output["interviewer"] = state.interviewers[interview.interviewer];
  return output;
}

const getInterviewersForDay = function(state, day) {
  const days = state.days;
  const interviewers = state.interviewers;
  const output = [];

  for (let weekday of days) {
    if (weekday.name === day) {
      for (let interviewer of weekday.interviewers) {
        output.push(interviewers[interviewer]);
      }
    }
  }
  return output;
}

export { getAppointmentsForDay, getInterview, getInterviewersForDay }