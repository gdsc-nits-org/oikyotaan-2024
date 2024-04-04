import './SponsorCardsStyles.css'
import Cards from './Cards'

function SponsorCards() {
  return (
    <div className='grid_container'>
      {Cards.map((item,i)=>(
        <div className="card" key={item.id}>
          <img className='spons_img' src={item} alt="a sponsor" />
        </div>
      ))}
    </div>
  )
}

export default SponsorCards