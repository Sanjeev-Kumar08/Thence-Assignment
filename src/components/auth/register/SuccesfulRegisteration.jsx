import React, { useEffect, useState } from 'react'
import Navbar from '../../navbar/Navbar'
import './SuccesfulRegisteration.css'
import { useNavigate } from 'react-router-dom';
import successTick from '../../../assets/images/successTick.svg'

const SuccesfulRegisteration = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (countdown === 0) {
      navigate('/')
    }
  }, [countdown])
  
  return (
    <div>
      <div className='navHead'>
        <Navbar />
      </div>
      <div className='SuccesssubContainer'>
        <div className='successTextContainer'>
          <img src={successTick} alt='successTick' />
          <span className='successText'>Success Submitted</span>
          <h2>
            Congratulations
          </h2>
          <p className='successPara'>
            Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
          </p>
        </div>
        <div className='redirectionTextContainer'>
          <p>Redirecting you to Homepage in </p><span className='sectext'>{countdown} Seconds</span>
        </div>

      </div>

    </div>
  )
}

export default SuccesfulRegisteration
