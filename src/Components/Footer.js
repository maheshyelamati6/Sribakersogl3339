import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Components/Myproject/app.css";

const Footer = () => {
  return (
    <footer className='container-fluid  bg-warning footer'>
        <div className='row'>

        <div className='col-md-6 navlinks py-2'>
        <p>&copy; Designed By <NavLink to="mailto:maheshsri1316@gmail.com">SRI Bakers</NavLink></p>
        </div>
       
        <div className='col-md-6 followus py-2'> Followus:
        <NavLink to="https://www.facebook.com/home.php" target='_blank'><i className="bi bi-facebook"></i></NavLink>
        <NavLink to="https://www.instagram.com/p/BshcvQTF1TI/?hl=en" target='_blank'><i className="bi bi-instagram"></i></NavLink>
        <NavLink to="https://youtu.be/O0unGHpKN-c?si=igvzuuZeknSRmItH" target='_blank'><i className="bi bi-youtube"></i></NavLink>
        <NavLink to="https://x.com/"><i className="bi bi-twitter-x" target='_blank'></i></NavLink>
        </div>

        </div>
        </footer>
  )
}

export default Footer