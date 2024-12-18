import { get,ref} from "firebase/database";
import {database} from '../firebaseconfig';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useState,useEffect } from 'react';
//import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './module.app.css';


const Cakesmainpage = () => {

  const[cakes,setcakes]=useState([]);
 
 
 useEffect(()=>{
  const usersRef=ref(database,'Cakes');
  get(usersRef).then((snapshot)=>{

    if(snapshot.exists()){

      const userArray =Object.entries(snapshot.val()).map(([id,data])=>({
        id,...data,
      }));
     setcakes(userArray);

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
               <h4>Cakesmainpage</h4>
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active to="Contactus">Cakesmainpage</Breadcrumb.Item>
         </Breadcrumb>
    </div>
    </div>
    <h2 className='Element'>Customisied Orders</h2>
 
          {

            cakes.map((bat)=>{

              return <tr>

                 
                 <div className='row gallery py-2 m-1'>
                     <div className='col-md-3 imagesection py-2'>
                     <NavLink  href={`/Cakesdetails/${bat.id}`}>
                     <img src={bat.imgpath} alt="cakesimg"/>
                     </NavLink>
                     </div>

                     <div className='col-md-7 p-5 py-5 '>
                      
                      <h6 className='headings'><span className='text-danger'>Category:</span>{bat.category}</h6>
                      <h6 className='headings'><span className='text-danger'>cakename:</span>{bat.cakename}</h6>
                      <h6 className='headings'><span className='text-danger'>colour:</span>{bat.colour}</h6>
                      <h6 className='headings'><span className='text-danger'>Desc:</span>{bat.message}</h6>
                      </div>
                 
                     <div>

                   
                     </div>

                 
                 </div>
                

              </tr>
            })
          }



    </div>
  )
}

export default Cakesmainpage