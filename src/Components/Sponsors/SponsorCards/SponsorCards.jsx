import './SponsorCardsStyles.css'
import SponsorCardsData from './SponsorCardsData'

const Cards = () => {
  return (
    <div className='grid_container'>
      {SponsorCardsData.map((item)=>(
        <div className="card">
          <img className='spons_img' src={item} alt="a sponsor" />
        </div>
      ))}
    </div>
  )
}

export default Cards