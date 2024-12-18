import { get,ref} from "firebase/database";
import {database} from '../firebaseconfig';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//import axios from 'axios';
import './module.app.css';

const Cookiesmainpage = () => {

  const[cookies,setcookies]=useState([]);

  useEffect(()=>{

    const usersRef=ref(database,'Cookies');
    get(usersRef).then((snapshot)=>{
  
      if(snapshot.exists()){
  
        const userArray =Object.entries(snapshot.val()).map(([id,data])=>({
  
          id,...data,
        }));
  
        setcookies(userArray);
  
      }
      else {
        console.log('No Data Available');
      }
  
      
    }).catch((err)=>{console.log(err)})
  
   },[])

 

  return (
    <div className='container-fluid p-0'>
       
       <div className='boxbreadcrumb'>
        <div className='breadcrumb'>
          <h4> Customisied Cookies</h4>
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active to="Contactus">Cookiesmainpage</Breadcrumb.Item>
         </Breadcrumb>
    </div>
    </div>
  
  <h2 className='Element'>Customisied Orders</h2>
  {

    cookies.map((bat)=>{

      return <tr>
       
  <div className='row gallery py-2 m-1'>

  <div className='col-md-4 imagesection py-2'>
<NavLink to={`/Cookiesdetail/${bat.id}`}>
<img src={bat.imgpath} alt="img-reference"/>
</NavLink>
</div>

<div className='col-md-7 p-5 py-5'>
 <h5 className='headings'><span className='text-danger'>Category:</span>{bat.category}</h5>
 <h6 className='headings'><span className='text-danger'>Cookie Name:</span> {bat.name}</h6>
 <h6 className='headings'><span className='text-danger'>Colour:</span>{bat.colour}</h6>
 <h6 className='headings'><span className='text-danger'>Desc:</span>{bat.message}</h6>
</div>

<div className='text-align-end'>


</div>

</div>

      </tr>
    })
  }
        

    </div>
  )
}

export default Cookiesmainpage