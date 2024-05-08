import React from 'react'
import './Navbar.css';
import logo from '../../assets/icons/logo.svg'
import Button from '../commonComponents/button/Button';
import { Link, useLocation } from 'react-router-dom';
import close from '../../assets/icons/Close.svg'

const Navbar = () => {
   const location = useLocation()
   console.log(location.pathname)
    const handleClick = () => {
        console.log('Button clicked');
    };


    return (
        <div className='navMainContainer'>
            <div className='subContainer'>
                <img src={logo} alt='BRUNEL' />
                <div className='navBtnContainer'>
                    {
                        location.pathname ==='/signup' ? <Link to={'/'}><div  className='cancelButton'> <img src={close} alt='close'/></div></Link> :location.pathname ==='/' ? <><Link to={'/signup'}>
                        <Button className="getProjectsBtn" onClick={handleClick}>
                            Get Projects
                        </Button>
                        </Link>
                        <Button className="onboardBtn" onClick={handleClick}>
                            Onboard Talent
                        </Button>
                        </> : ""
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar
