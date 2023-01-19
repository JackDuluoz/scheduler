import { useState } from "react";
import axios from 'axios'

const useApplicationData = function () {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = day => setState({ ...state, day });
  
  const bookInterview = function (id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const getDayId = function (day) {
      for (let weekday of state.days) {
        if (weekday.name === day) {
          return weekday
        }
      }
    }
    const dayId = getDayId(state.day).id - 1
    const dayObject = state.days[dayId]
    const getSpots = function(day) {
      for (let weekday of state.days) {
        if (weekday.name === day) {
          return weekday.spots
        }
      }
    }
    const startingSpots = getSpots(state.day)
    const day = {
      ...dayObject,
      spots: startingSpots-1
    }
    state.days[dayId] = day
    const days = [...state.days]    

    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {       
        setState({
          ...state,
          appointments,
          days
        });
      })
  }

  const deleteInterview = function (id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const getDayId = function (day) {
      for (let weekday of state.days) {
        if (weekday.name === day) {
          return weekday
        }
      }
    }
    const dayId = getDayId(state.day).id - 1
    const dayObject = state.days[dayId]
    const getSpots = function (day) {
      for (let weekday of state.days) {
        if (weekday.name === day) {
          return weekday.spots
        }
      }
    }
    const startingSpots = getSpots(state.day)
    const day = {
      ...dayObject,
      spots: startingSpots + 1
    }    
    state.days[dayId] = day
    const days = [...state.days] 

    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
          days
        });
      })
  }

  const editInterview = function (id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments
        });
      })
  }

  return {state, setState, setDay, bookInterview, deleteInterview, editInterview}

}

export default useApplicationData 