import './SponsorHeadingStyles.css'

function SponsorHeading() {
  return (
    <div className='header_container'>
       <img className='drum_left' src="https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/Oikyotaan%20'24%20assets/Sponsors/drumLeft" alt="a drum" />
       <div className='title_div'>
            <p className='title'>Sponsors</p>
            <img className='curl' src="https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/Oikyotaan%20'24%20assets/Sponsors/underline" alt="an underline" />
       </div>
       <img className='drum_right' src="https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/Oikyotaan%20'24%20assets/Sponsors/drumRight" alt="another drum" />
    </div>
  )
}

export default SponsorHeading