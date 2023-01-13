import React from 'react';

// Instead of having the same hard-coded list in the return statement of multiple components
// (in multiple files), 'props' enhances code modularity and helps to DRY up code.

// Props are a way of passing data from one component--a parent component--into a child component.

// In this example, PropsList is the child component. The furniture data is handed down as
// props from the parent component, ListExample, where it is stored in a variable (an array of objects).

// Props should therefore always be used in the highest common ancestor of two components, as they can be 
// passed down easily but not passed back up.

const PropsList = (props) => {
// Can also be written as below: specific props are accessed inside an object parameter
// which would make it unneccesary to user the props. syntax below.

// const PropsList = ({furniture, title}) => {

  const furniture = props.furniture
  const title = props.title
  const handleDelete = props.handleDelete
  
  // console.log(props);
  // console.log(props.title);
  // console.log(props.furniture)  

  return (

    <div className="props-list">

      {/* Rememeber that if the JSX return is spread over more than one line it must return
      inside parenthesis or it will throw an error. Tehrefore, the .map function takes each individual
      object the the array (called 'piece' here) and returns JSX inside a parenthesis.
      
      I have also added some inline styling to the return component.

      This demonstrates how CSS is used inside JSX. Note the format style={{}}

      The first pair of curly braces is required to write javascript.
      The second pair arises from the javascript being a CSS style object. 
      
      Hyphens are used in .css files for style key/properties, but in javascript they are interpreted as
      a minus sign). Therefore, background-color (etc) must instead be written in camelCase in javascript. */}

      {/* Copy-pasted directly from the original list return statement in ListExample  */}

      <br></br>
      <h2>{title}</h2>

      {furniture.map((piece) => (

        <div className="furniture-listing" key={piece.id}
          
          style={{
            border: "2px solid black",
            marginTop: "1em",
            maxWidth: "10vw",
            textAlign: "center"
          }}>
          
          <h2 style={{
            color: 'darkred',
            backgroundColor: 'lightgrey'
          }}>{piece.item}</h2>

          <div className="details">
            <h3>Colour: {piece.colour}</h3>
            <h3>Price: ${piece.price}</h3>            
          </div>
          <button onClick={() => handleDelete(piece.id)}>Delete Piece</button>
        </div>
        
      ))}
      

    </div>

  );

}
 
export default PropsList;