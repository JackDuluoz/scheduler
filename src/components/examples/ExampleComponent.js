import React from 'react';

const ExampleComponent = () => {

  // Without Using Event Parameter
  const handleClick = () => {
    console.log("Button Clicked")
  } 

  const handleClickAnon = (name) => {
    console.log(`Button Clicked by ${name}`)
  }

  // With Event Parameter
  const handleClickEvent = (event) => {
    console.log("Button Clicked", event.target)
  }

  const handleClickAnonEvent = (name, event) => {
    console.log(`Button Clicked by ${name}`, event.target)
  }

  return ( 

    // Both divs wrapped in single root section
    <section>

    <div className="example">
      <h2>Example Component</h2>
        <br></br>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(event) => {handleClickAnon('Michael', event)}}>Click Me (Anon)</button>
    </div>
      
      <br></br>

     <div className="example">
      <h2>Example Component with Event</h2>
        <br></br>
      <button onClick={handleClickEvent}>Click Me</button>
      <button onClick={(event) => {handleClickAnonEvent('Evil Michael', event)}}>Click Me (Anon)</button>
    </div>
      
    </section>

   );
}
 
export default ExampleComponent;