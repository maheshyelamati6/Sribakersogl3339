import React from 'react';
import Error from './Assests/Error.jpg';
import '../Body/module.app.css';

const Errorpage = () => {
  return (
    <div className='container-fluid p-0'>
   
   <img src={Error} alt="Errorpage" className='Errorpage'/>

    </div>
  )
}

export default Errorpage