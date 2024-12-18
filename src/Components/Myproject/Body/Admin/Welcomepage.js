import React from 'react';
import Welcome from './Assests/Welcomepage2.jpg';
import '../Admin/module.app.css';


const Welcomepage = () => {
  return (
    <div className='container-fluid p-0 '>

   <div>
   <img src={Welcome} alt="Adminwelcome" className='Welcomepage'/>
   </div>
         
    </div>
  )
}

export default Welcomepage