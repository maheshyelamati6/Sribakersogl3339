import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from "../Body/Assests/delfrez.png";
import './module.app.css';

const CommonFooter = () => {
  return (
    <div className='container-fluid p-0'>
        
        <div className='container-fluid  commonfooter'>
            <div className='row'>
                <div className='col-md-4'>
             <img src={image1} alt="footerimg"/>

             <p className="card-texts">At SRI Bakers, our story is one of passion, dedication, and unwavering commitment to crafting the finest baked goods. 
                What began as a modest venture in 1999 has evolved into a beloved brand with a reputation for exceptional quality and taste.</p>
                </div>


                <div className='col-md-4 links'>
                    <h3 className='centre decoration'>Useful Links</h3>

                    <ul>
                        <li>
                            <NavLink to="/"> <i class="bi bi-arrow-down-right-circle-fill"></i>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Aboutus"> <i class="bi bi-arrow-down-right-circle-fill"></i>Aboutus</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Gallery"> <i class="bi bi-arrow-down-right-circle-fill"></i>Gallery</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Contactus"> <i class="bi bi-arrow-down-right-circle-fill"></i>Contactus</NavLink>
                        </li>
                    </ul>

                    
                </div>

                <div className='col-md-4 contactus'>
              
                <h3 className='centre decoration'>Contactus</h3>

                <p><i class="bi bi-telephone-outbound-fill"></i>+91-7874203736</p>
                <p><i class="bi bi-envelope-fill"></i>sribakersogl@gmail.com</p>
                <p><i class="bi bi-geo-alt-fill"></i>SRI Bakers,Near OPS School,<br/>Ongole(A.P)-523490</p>




                </div>
            </div>
        </div>
    </div>
  )
}

export default CommonFooter