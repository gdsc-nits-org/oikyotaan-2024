import './SponsorsStyle.css'
import SponsorHeading from './SponsorHeading/SponsorHeading'
import SponsorCards from './SponsorCards/SponsorCards'


const Sponsors = () => {
  return (
    <div className='container'>
      <SponsorHeading />
      <SponsorCards />
    </div>
  )
}

export default Sponsors;