import React from 'react'

const MenuCard = (props) => {
  return (
    <div className='menu-card'>
      <div className="menu-card-image"></div>
      <div className="menu-card-details">
        <div className="menu-card-details__title">
          <h4 className='card-title'>{ props.title }</h4>
          <h4 className='card-title'>{ props.price }</h4>
        </div>
        <div className="menu-card-details__description">
          <p>{ props.description }</p>
        </div>
        <div className="menu-card-details__order">
          <p className='highlight-text'>Order a delivery</p>
        </div>
      </div>
    </div>
  )
}

export default MenuCard