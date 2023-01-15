
export function getAppointmentsForDay(state, day) {
  let AppointmentsForDay = []
  for (let weekday of state.days) {
    if (weekday.name === day) {
      const ids = weekday.appointments
      for (let id of ids) {
        for (let appointment in state.appointments) {
          if (id === Number(appointment)) {
            AppointmentsForDay.push(state.appointments[appointment])
          }
        }
      }
    }   
  }
  return AppointmentsForDay  
}

export function getInterview(state, interview) {
  let output = {}
  if (!interview) {
    return null
  }
  output["student"] = interview.student
  output["interviewer"] = state.interviewers[interview.interviewer];
  return output;
}