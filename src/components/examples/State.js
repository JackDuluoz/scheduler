import React, {useState} from 'react';

const StateExample = () => {

  // This is not a reactive variable.
  let animal = 'Tiger'

  // Therefore, this function will log Tiger and Lion on the first click, then Lion Lion
  // for every subsequent click of the button.
  const handleClick = () => {
    console.log(animal)
    animal = 'Lion'
    console.log(animal)
  }

  // This example will use the useState 'hook'.
  // In React, a hook is a special type of function that does a specific job.
  // useState provides us with a reactive value, and gives us a way to change that value whenever we want.

  // We set the starting value as the parameter in useState.
  const [bird, setBird] = useState('Albatross')
  const [wingspan, setWingspan] = useState(11)

  // Now, the handleClick function will use setBird and setWingspan to change the value of bird and wingspan
  // when an event triggers the function to run.

  // In this case, the Change Bird button, when clicked, invokes the function and changes the values.
  // This change is reflected by changing the paragraph message above the button.
  const handleClickWithState = () => {
    setBird('Eagle');
    setWingspan(7)
  }

  return ( 

    <section>

      <div className="stateExample">
        <br></br>
        <h2>Practicing State</h2>
        <p>{animal}</p>
        <button onClick={handleClick}>Change Animal (Console)</button>
      </div>

      <div className="stateExample">
        <br></br>
        <h2>Practicing State</h2>
        <p>An {bird} has a wingspan of {wingspan} ft. </p>
        <button onClick={handleClickWithState}>What About An Eagle?</button>
      </div>

    </section>
    
  );
  
}
 
export default StateExample;