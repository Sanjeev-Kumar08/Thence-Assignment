import React from 'react'
import Heading from './heading/Heading'
import './HeroSection.css'
import girlImg from '../../assets/images/girlImg.svg'
import spikes from '../../assets/images/spikes.svg'
import rightarrow from '../../assets/icons/rightarrow.svg'
import rocket from '../../assets/icons/rocket.svg'
import Carousel from '../carousel/Crousel'


const HeroSection = () => {
  const handleClick = () => {
    console.log("button is clicked")
  }

  return (
    <div className='herosectionMainContainer'>
      <div className='herosectionHeadingContainer'>
        <Heading />
      </div>
      <div className='herosectionBodyContainer'>
        <div className='imgContainer'>
          <div className='girlimgContainer'>
            <img src={girlImg} alt='girlbanner' />
            <div className='overlapContainer'>
              <div className='overlapTextContainer'>
                <span className='dollarsign'>$0.5</span>
                <span className='millionText'>MILLION</span>
              </div>
              <p>
                Reduced client expenses by saving on hiring and employee costs.
              </p>


            </div>
            <div className='overlapContainerleft'>
              <div className='contentcontainer'>
              <div className='contentImgContainer'>
                <img src={spikes} />
                <span className='percentsign'>40%</span>
              </div>
              <p>
                Achieved reduction in project execution time by optimising team availability
              </p>
              </div>
             

            </div>
            <div className='daysSpan'>
              <div className='rocketcontainer'>
              <img src={rocket}  alt='rocket'/>
              </div>
           
              <div className='textSpan'>
                 
                <span className='days'>
                  10 DAYS
                </span>
                <span className='staff'>
                  Staff Deployments
                </span>
              </div>

            

            </div>
          </div>

          <div className='rightMainContainer'>
            <div className='rightTextContainer'>
             
              <Carousel/>
            </div> 
            
           
            <div className='btnContainer'>
              <button className="rightMainContainerbutton">
                Explore more
                <img src={rightarrow} alt='rightarrow' />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSection
