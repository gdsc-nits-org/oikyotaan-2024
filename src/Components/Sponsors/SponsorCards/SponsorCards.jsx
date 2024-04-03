import React from 'react'
import './SponsorCardsStyles.css'
import cards from './cards'

function SponsorCards() {
  return (
    <div className='grid_container'>
      {cards.map((item,i)=>(
        <div className="card" key={item.id}>
          <img className='spons_img' src={item} alt="a sponsor" />
        </div>
      ))}
    </div>
  )
}

export default SponsorCards