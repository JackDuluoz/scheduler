import React from "react";
// import classNames from "classnames";
import DayListItem from "./DayListItem";

function DayList(props) {

  const days = props.days;
  const DayList = days.map((day) => (

    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.value}
      setDay={props.onChange}
    />
    
  ))

  return (

    <ul>{DayList}</ul>

  );

}

export default DayList;