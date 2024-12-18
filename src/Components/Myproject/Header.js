import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./Body/Assests/Delfrez.jpg";
import "../Myproject/app.css";


const Header = () => {
  return (
    <div className='container p-0 m-0'>

<nav 
    className="navbar navbar-expand-lg navbar-light sticky-top" 
>
    <header className="container">
        <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo"/>
            </NavLink>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="true"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse justify-content-end" id="collapsibleNavId">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/" aria-current="page">Home</NavLink>
                       
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Aboutus" aria-current="page">AboutUs</NavLink>
                       
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Gallery" aria-current="page">Gallery</NavLink>
                       
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link active" to="/Contactus" aria-current="page">ContactUs</NavLink>
                       
                </li>
               
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdownId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >Cakes</a
                    >
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownId"
                    >
                        <NavLink className="dropdown-item" to="/Cakesmainpage"
                            >Cool Cakes</NavLink>
                        
                        <NavLink className="dropdown-item" to="/Cakesmainpage" 
                            >Birthday Cakes</NavLink>

                        
                        <NavLink className="dropdown-item" to="/Cakesmainpage"
                            >Valentine Cakes</NavLink>
                        
                        <NavLink className="dropdown-item" to="/Cakesmainpage"
                            >Special Cakes</NavLink>
                       

                        <NavLink className="dropdown-item" to="/Cakesmainpage"
                            >Party Cakes</NavLink>
                       
                    </div>
                </li>


                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdownId"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >Cookies</a
                    >
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownId"
                    >
                        <NavLink className="dropdown-item" to="/Cookiesmainpage"
                            >Almond Cookies</NavLink>
                        
                        <NavLink className="dropdown-item" to="/Cookiesmainpage"
                            >Cashew Cookies</NavLink>
                        

                        <NavLink className="dropdown-item" to="/Cookiesmainpage"
                            >Butter Cookies</NavLink>
                        

                        <NavLink className="dropdown-item" to="/Cookiesmainpage"
                            >Choclate Cookies</NavLink>
                        
                    </div>
                </li>

            </ul>
           
        </div>
    </header>
</nav>



    </div>
  )
}

export default Header