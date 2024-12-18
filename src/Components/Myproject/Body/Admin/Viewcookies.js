import React,{useState,useEffect} from 'react';
import { get,ref} from "firebase/database";
import {database} from './firebaseconfig';
import axios from 'axios';
import './module.app.css';

const Viewcookies = () => {

  const[Cookies,setcookies]=useState([]);
  const[id,setid]=useState("");
  const[name,setname]=useState("");
  const[imgpath,setimgpath]=useState("");
  const[colour,setcolour]=useState("");
  const[category,setcategory]=useState("");
  const[message,setmessage]=useState("");
 

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


  const updateform=(e)=>{

    e.preventDefault();

    axios.put("http://localhost:7000/Cookies/"+id,{id,name,imgpath,colour, category,message})

    .then(()=>{

      alert("Data Updated Successfully");
      
      setname('');
      setimgpath('');
      setcolour('');
      setcategory('');
      setmessage('');

    })

    .catch((err)=>{

      console.log(err);

    })

  }




  const deletebatch=(batchid)=>{

    axios.delete("http://localhost:7000/Cookies/"+batchid)

    .then(()=>{

      alert("Batch Deleted Successfully");
    })

    .catch((err)=>{

      console.log(err);

    })
  }



  return (
    <div className='container-fluid p-0'>
       <div className='container-fluid Admin'>
       <h1 className='Element'>View Cookies</h1>
       </div>
           
           {
              
              Cookies.map((bat)=>{

               return <tr key={bat.id}>

  <div className='row gallery py-2 my-2 '>

  
   <div className='col-md-4 imagesection'>

    <img src={bat.imgpath} alt="img-reference"/>

   </div>

   <div className='col-md-8 p-5 py-2'>

    <h6 className='headings'><span className='text-danger'>Cookie Name:</span> {bat.name}</h6>
    <h6 className='headings'><span className='text-danger'>Colour:</span>{bat.colour}</h6>
    <h6 className='headings'><span className='text-danger'>Category:</span>{bat.category}</h6>
    <h6 className='headings'><span className='text-danger'>Desc:</span>{bat.message}</h6>

    <button className='btn btn-warning m-2'>Edit</button>
    <button className='btn btn-danger'>Delete</button>
   </div>
   

  </div>
              
               </tr>

              }) 
        }

             
          <div className='container-fluid m-2'>
            <div className='row'>
              <div className='col-md-5'>
              <form onSubmit={updateform}>

<div className='row py-2'>
  <input type="text" form id="form control" placeholder='Enter Cookie Name' value={name} onChange={(e)=>{setname(e.target.value)}} />
  </div>

  <div className='row py-2'>
  <input type="url" form id="form control" placeholder='Enter Img path' value={imgpath} onChange={(e)=>{setimgpath(e.target.value)}} />
  </div>

  <div className='row py-2'>
  <input type="text" form id="form control" placeholder='Enter Cookie Colour' value={colour} onChange={(e)=>{setcolour(e.target.value)}} />
  </div>


  <div className='row py-2'>
  <input type="text" form id="form control" placeholder='Enter Cookie Category' value={category} onChange={(e)=>{setcategory(e.target.value)}} />
  </div>
  <div className='row py-2'>
  <textarea rows={3} cols={50} form id="form control" placeholder='Enter Description' value={message} onChange={(e)=>{setmessage(e.target.value)}} />
  </div>

 <button type='submit'className='btn btn-primary'>Update</button>
</form>
              </div>
            </div>
          </div>

 

              
            



           
         






    </div>
  )
}

export default Viewcookies