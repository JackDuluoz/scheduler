import React, { useState } from 'react';
import PropsList from './PropsList';

const List = () => {

  // This useState hook will be an array of objects.
  // Hard-coded to start.
  const [furniture, setFurniture] = useState([
    { id: 1, item: 'Sofa', colour: 'Navy', price: 499 },
    { id: 2, item: 'Desk', colour: 'Brown', price: 299 },
    { id: 3, item: 'Lamp', colour: 'Metal', price: 89 },
    { id: 4, item: 'Chair', colour: 'Brown', price: 169 },
    { id: 5, item: 'Dresser', colour: 'Chocolate', price: 449 }
  ])

  const title = "All Furniture Listings"

  const handleDelete = (id) => {
    const updatedFurniture = furniture.filter((piece) => piece.id !== id)
    setFurniture(updatedFurniture)
  }

  return (

    <div className="list">
      
      {/* <p>A list of furniture will go here...</p> */}
      
      <PropsList furniture={furniture} title={title} handleDelete={handleDelete} anotherProp={"Hello child, your parent component has sent down this prop to you."} />
      {/* In the next example, the prop is filtered to list brown furniture only.*/}
      <PropsList furniture={furniture.filter((piece) => piece.colour === 'Brown')} handleDelete={handleDelete} title={"Brown Furniture Only"} />
      
  </div>

  );
}
 
export default List;