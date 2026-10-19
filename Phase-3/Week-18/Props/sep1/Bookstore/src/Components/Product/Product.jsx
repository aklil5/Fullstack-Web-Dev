import React, { Component } from 'react'

import './Product.css'

export default class Product extends Component {
  render() {
    const {color, title, img, imgAlt, price, description, text} = this.props
    return (
      <>
        <div className="product-card">
                <div className={`card-header ${color}`}>
                    <h2 className="product-title">{title}</h2>
                </div>

                <div className="product-image">
                    <img
                        src={img}
                        alt={imgAlt}
                    />
                </div>

                <div><p>{text}</p></div>

                <div className="product-content">
                    <h3 className="product-price">{price}</h3>
                    <p className="product-description">
                       {description}
                    </p>
                </div>

                <div className="add-to-cart">
                    <button className="btn" type="submit">Add to cart</button>
                </div>
        </div>
      </>
    )
  }
}
