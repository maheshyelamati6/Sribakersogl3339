import React, { useState } from 'react';
import axios from 'axios';
import "./module.app.css";

const Cookies = () => {

  const[category,setcategory]=useState("");
  const[imgpath,setimgpath]=useState("");
  const[name,setname]=useState("");
  const[colour,setcolour]=useState("");
  const[message,setmessage]=useState("");

  const submitform=(e)=>{
    e.preventDefault();

    axios.post("https://sribakersogl3339-default-rtdb.firebaseio.com/Cookies.json",{name,imgpath,colour,category,message})

    .then(()=>{
      alert("Data Posted Successfully");
      
       setname("");
       setimgpath("");
       setcolour("");
       setcategory("");
       setmessage("");
    })

    .catch((err)=>{

      console.log(err)

    })
  }

  return (
    <div className='container-fluid p-0'>
      <div className='container-fluid Admin'>
      <h1 className='Element'>Cookies</h1>
      </div>
 

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-5 my-2 py-2'>
                
                <h4 className='Element'>Add Cookies Data</h4>

        <form onSubmit={submitform}>

        
         <div className='row py-2'>
            <input type='text' placeholder='Enter Category of Cookie' id="form-floating" value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
          </div>

          <div className='row py-2'>
            <input type='url' placeholder='Enter Image Path' id="form-floating" value={imgpath} onChange={(e)=>{setimgpath(e.target.value)}}/>
          </div>

         

          <div className='row py-2'>
             <input type='text' placeholder='Enter Cookie Name' id="form-floating" value={name} onChange={(e)=>{setname(e.target.value)}}/>
          </div>
          <div className='row py-2'>
            <input type='text' placeholder='Enter Cookie Colour' id="form-floating" value={colour} onChange={(e)=>{setcolour(e.target.value)}}/>
          </div>

          <div className='row py-2'>
            <textarea rows={3} cols={50} placeholder='Enter Description' id="form-floating" value={message} onChange={(e)=>{setmessage(e.target.value)}}/> 
          </div>
         <div className='my-2'>
         <button type='submit' className='btn btn-warning'>Submit</button>
         </div>
        </form>

             
             

        </div>
      </div>
    </div>
       

    </div>
  )
}

export default Cookies