import React from 'react';
import { useState,useEffect } from 'react';
import { get,ref} from "firebase/database";
import {database} from '../Myproject/firebaseconfig';
//import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import './Body/module.app.css';
import Breadcrumb from 'react-bootstrap/breadcrumb'

const Cookiesdetail = () => {

    const[batch,setbatch]=useState([]);
    const{id}=useParams();

    useEffect(()=>{
      const usersRef=ref(database,'Cookies');
      get(usersRef).then((snapshot)=>{
    
        if(snapshot.exists()){
    
          const userArray =Object.entries(snapshot.val()).map(([id,data])=>({
    
            id,...data,
          }));
    
          setbatch(userArray);}
      })
    
     },[id])
   
  return (
    <div className='container-fluid p-0'>

<div className='boxbreadcrumb'>
 <div className='breadcrumb'>
      <h5 className='title'>Cookies Details</h5>
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active to="/Cookiesdetail">Cookiesdetail</Breadcrumb.Item>
</Breadcrumb>

</div>
</div>


           

<div className='row m-5'>

    <div className='col-md-5 imagesection '>
        <img src={batch.imgpath} alt="imagecontainer"/>
    </div>



    <div className='col-md-7'>

<h5 className='headers'><span className='text-danger'>Cookiee Name:</span>{batch.name}</h5>
<h5 className='headers'><span className='text-danger'>Category:</span>{batch.category}</h5>
<h5 className='headers'><span className='text-danger'>Cake Name:</span>{batch.colour}</h5>
<h5 className='headers'><span className='text-danger'>Cake Name:</span>{batch.message}</h5>

<NavLink to="/Contactus">
<button className='btn btn-outline-success m-2'>Enquire Now</button>
</NavLink>

</div>




</div>


</div>

   
  )
}

export default Cookiesdetail