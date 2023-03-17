import React from 'react'
// import "App.css"
function Mainsection() {
  return (
    <div>
        <div className="main-container">
        <div className="left-container">
         <h1 className='heading '>Welcome! to The Launch Pad</h1>
         <p  className='subtitle-heading'> Discover the wonder of rocket launches and space travel with us.</p>
         <p  className='subtitle-heading'> This website provides information about SpaceX capsules, including capsule serial, status, original launch date, type, and details, with a search functionality to filter results.</p>
        </div>
        <div className="right-container">
        <img src="\src\logo\space-shuttle-taking-off-with-tower-satellite-mountain-cartoon-icon-illustration_138676-2888.avif" alt="" className="rocket-img" />
        </div>
        </div>
       </div>
  )
}

export default Mainsection