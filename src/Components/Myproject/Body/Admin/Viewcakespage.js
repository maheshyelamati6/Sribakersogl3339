import React,{ useState,useEffect } from 'react';
import { get,ref} from "firebase/database";
import {getDocs,doc} from 'firebase/firestore';
import  {collection}  from 'firebase/firestore';
import {database} from './firebaseconfig';
import axios from 'axios';
import './module.app.css';

const Viewcakespage = () => {
  
  const[viewcake,setviewcakes]=useState([]);
  const[id,setid]=useState("");
  const[batchId,setbatchId]=useState("");
  const[cakename,setcakename]=useState("");
  const[imgpath,setimgpath]=useState("");
  const[colour,setcolour]=useState("");
  const[message,setmessage]=useState("");
  const[category,setcategory]=useState("");

 




  useEffect(()=>{
    const usersRef=ref(database,'Cakes');
    get(usersRef).then((snapshot)=>{
  
      if(snapshot.exists()){
  
        const userArray =Object.entries(snapshot.val()).map(([id,data])=>({
          id,...data,
        }));
       setviewcakes(userArray);
  
      }
      
  
    }).catch((err)=>{console.log(err)})
  
   },[])

  return (
    <div className='container-fluid p-0 '>

 <div className='container-fluid Admin'>

<h1 className='Element'>View Cakes Page</h1>

</div>
        

{

  viewcake.map((bat)=>{

    return <tr key={bat.id}>

      <div className='row galleria m-1'>

           <div className='col-md-4 imagesection py-2'>

            <img src={bat.imgpath} alt="image"/>

           </div>


           <div className='col-md-8 p-5'>

              <h5 className='headers'><span className='text-danger'>Category:</span>{bat.category}</h5>
              <h5 className='headers'><span className='text-danger'>Cake Name:</span>{bat.cakename}</h5>
              <h5 className='headers'><span className='text-danger'>Colour:</span>{bat.colour}</h5>
              <h5 className='headers'><span className='text-danger'>Desc:</span>{bat.message}</h5>
                  
              <button className='btn btn-primary m-2'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
           </div>

      </div>

    </tr>

  })
} 

    <div className='row m-2'>

      <div className='col-md-5'>

      <form >

<div className='row py-2'>
  <input type="text" form id="form control" placeholder='Enter Cookie Name' value={cakename} onChange={(e)=>{setcakename(e.target.value)}} />
  </div>

  <div className='row py-2'>
  <input type="url" form id="form control" placeholder='Enter Img path' value={imgpath} onChange={(e)=>{setimgpath(e.target.value)}} />
  </div>

  <div className='row py-2'>
  <input type="text" form id="form control" placeholder='Enter Cookie Colour' value={colour} onChange={(e)=>{setcolour(e.target.value)}} />
  </div>


  <div className='row py-2'>
  <input type="text" form id="form control" placeholder='Enter Cookie Colour' value={category} onChange={(e)=>{setcategory(e.target.value)}} />
  </div>
  <div className='row py-2'>
  <textarea rows={3} cols={50} form id="form control" placeholder='Enter Cookie Colour' value={message} onChange={(e)=>{setmessage(e.target.value)}} />
  </div>

          <button className='btn btn-primary'>Update</button>
</form>


      </div>
    </div>
 


    </div>
  )
}

export default Viewcakespage