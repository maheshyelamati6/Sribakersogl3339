import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './module.app.css';
import{get,ref} from 'firebase/database';
import {database} from './firebaseconfig';

const Enquiry = () => {

  const[Enquiry,SetEnquiry]=useState([]);
 
  const[batchid,setbatchid]=useState("");


  useEffect(()=>{
    const usersRef=ref(database,'Enquiry');
    get(usersRef).then((snapshot)=>{
  
      if(snapshot.exists()){
  
        const userArray =Object.entries(snapshot.val()).map(([id,data])=>({
          id,...data,
        }));
       SetEnquiry(userArray);
  
      }
      else {
        console.log('No Data Available');
      }
  
    }).catch((err)=>{console.log(err)})
  
   },[])


 const deletebatch=(batchid)=>{

  axios.delete("https://sribakersogl3339-default-rtdb.firebaseio.com/Enquiry/"+batchid)

  .then(()=>{

    alert("Data deleted Successfully");
  })

  .catch((err)=>{

    console.log(err);

  })


 }

  

  return (
    <div className='container-fluid col-12'>

      <div className='container-fluid Admin'>
        <h1 className='Element'>Enquiry</h1>
      </div>

          <div className='table table-responsive'>
            <div className='table'>
              <thead className='table-dark'>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>E-mail</th>
                  <th>Mobile</th>
                  <th>Message</th>
                  <th>Remarks</th>
                </tr>
              </thead>

               <tbody>
                {
                  Enquiry.map((bat)=>{

                    return <tr key={(bat.id)}>

                      <td>{bat.name}</td>
                      <td>{bat.lastname}</td>
                      <td>{bat.email}</td>
                      <td>{bat.mobilenumber}</td>
                      <td>{bat.Message}</td>
                     <td><button className='btn btn-danger' onClick={()=>deletebatch(bat.id)}>Delete</button></td>


                    </tr>

                  })
                }
                <tr>
                 
                </tr>
               </tbody>
            </div>
          </div>


    </div>
  )
}

export default Enquiry


       

     




