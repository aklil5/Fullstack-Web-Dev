import React, { Component } from 'react'
import './FoodItem.css'

export default class FoodItem extends Component {
  render() {
    const {img, title, price, desc} = this.props
    return (
      <>
        <div className="foods-container">
            <div className="single-food">
            <div className="img">
                <img
                src={img} />   
            </div>
            <div className="title-price">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            <div className="food-desc">
                {desc}
            </div>
        </div>

        </div>
      </>
    )
  }
}
