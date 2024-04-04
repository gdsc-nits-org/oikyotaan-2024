import './SponsorsStyle.css'
import SponsorHeading from './SponsorHeading/SponsorHeading'
import SponsorCards from './SponsorCards/SponsorCards'


function Sponsors() {
  return (
    <div className='container'>
      <SponsorHeading />
      <SponsorCards />
    </div>
  )
}

export default Sponsors;