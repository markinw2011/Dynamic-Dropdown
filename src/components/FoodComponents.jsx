import React from 'react'

const FoodComponents = ({foodName,image_url}) => {
  return (
    <div className="sinfle-food">
        <h2>{foodName}</h2>
        <img src={image_url} alt={foodName}></img>
        </div>
  )
}

export default FoodComponents