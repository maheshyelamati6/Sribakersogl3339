import React,{useState,useEffect} from 'react';
import { get,ref} from "firebase/database";
import {database} from '../Myproject/firebaseconfig';
import { NavLink, useParams } from 'react-router-dom';
//import axios from 'axios';
import  Breadcrumb  from 'react-bootstrap/breadcrumb';
import "./Body/module.app.css";

const Cakesdetails = () => {

    const{id}=useParams();
    const[details,SetDetails]= useState([]);

    useEffect(()=>{
        const usersRef=ref(database,`/Cakes/`+id);
        get(usersRef).then((snapshot)=>{
      
          if(snapshot.exists()){
      
            const userArray =Object.entries(snapshot.val()).map(([id,data])=>({
      
              id,...data,
            }));
      
            SetDetails(userArray);}
        })
      
       },[id])

      // useEffect(() => {
      //   const fetchData = async () => {
      //     const response = database.collection('Cakes').where('param', '==', id);
      //     const data = await response.get();
      //     console.log("data = " + data)
      //     SetDetails(data.docs.map(doc => doc.data()));
      //   };
      //   fetchData();
      // }, [id]);

  return (
    <div className='container-fluid p-0'> 

<div className='boxbreadcrumb'>
 <div className='breadcrumb'>
      <h5 className='title'>Cakes Details</h5>
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active to="/Cakesdetails">Cakesdetails</Breadcrumb.Item>
</Breadcrumb>

</div>
</div>

    <div className='container p-5'>
        <div className='row m-5'>
            <div className='col-md-4 imagesection'>

                <img src={details.imgpath} alt="imagepath"/>
            </div>

            <div className='col-md-6 m-10'>

                <h5 className='headers'><span className='text-danger'>Cake Name:</span>{details.cakename}</h5>
                <h5 className='headers'><span className='text-danger'>Category:</span>{details.category}</h5>
                <h5 className='headers'><span className='text-danger'>Colour:</span>{details.colour}</h5>
                <h5 className='headers'><span className='text-danger'>Desc:</span>{details.message}</h5>

                <NavLink to="/Contactus">
                <button className='btn btn-outline-success m-2'>Enquire Now</button>
                </NavLink>
            </div>
           

        </div>
        </div>
     
  






    </div>
  )
}

export default Cakesdetails