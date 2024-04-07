import './SponsorCardsStyles.css'
import Cards from './SponsorCards'

const SponsorCards = () => {
  return (
    <div className='grid_container'>
      {Cards.map((item)=>(
        <div className="card">
          <img className='spons_img' src={item} alt="a sponsor" />
        </div>
      ))}
    </div>
  )
}

export default SponsorCards