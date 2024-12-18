import React, { useState } from 'react';
import axios from 'axios';
import './module.app.css';


const Viewcakes = () => {

  const[category,setcategory]=useState("");
  const[imgpath,setimgpath]=useState("");
  const[cakename,setcakename]=useState("");
  const[colour,setcolour]=useState("");
  const[message,setmessage]=useState("");

  const postform=(e)=>{
    e.preventDefault();

    axios.post("https://sribakersogl3339-default-rtdb.firebaseio.com/Cakes.json",{category,imgpath,cakename,colour,message})

    .then(()=>{
      alert("Data Posted Successfully");
      setcategory("")
      setimgpath("")
      setcakename("")
      setcolour("")
      setmessage("")
    })

    .catch((err)=>{

      console.log(err)

    })
  }
  return (
    <div className='container-fluid p-0'>
        <div className='container-fluid Admin'>
        <h1 className='Element'>Cakes</h1>

        <div className='col-md-5 m-1'>
          
         <form onSubmit={postform}>
         <h4 className='Element'>Add Cakes Data</h4>
         <div className='row py-2'>
            <input type='text' placeholder='Enter Category of Cake' id="form-floating" value={category} onChange={(e)=>{setcategory(e.target.value)}} required/>
          </div>

          <div className='row py-2'>
            <input type='url' placeholder='Enter Image Path' id="form-floating" value={imgpath} onChange={(e)=>{setimgpath(e.target.value)}} required/>
          </div>

          <div className='row py-2'>
            <input type='text' placeholder='Enter Cake Name' id="form-floating" value={cakename} onChange={(e)=>{setcakename(e.target.value)}} required/>
          </div>

          <div className='row py-2'>
            <input type='text' placeholder='Enter Cake Colour' id="form-floating" value={colour} onChange={(e)=>{setcolour(e.target.value)}} required/>
          </div>

          <div className='row py-2'>
            <textarea rows={3} cols={50} placeholder='Enter Description' id="form-floating" value={message} onChange={(e)=>{setmessage(e.target.value)}} required/> 
          </div>

               <button type='submit' className='btn btn-primary py-2'>Submit</button>
         </form>
         
        </div>




        </div>

        


    </div>
  )
}

export default Viewcakes