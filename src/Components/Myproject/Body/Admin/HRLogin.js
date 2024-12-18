import React,{useState} from 'react';
import './module.app.css';
import Admin from './Assests/Adminimg.jpg';
import { useNavigate } from 'react-router-dom';
const HRLogin = () => {

    const[username,Setusername]=useState("");
    const[password,Setpassword]=useState("");
    const navigate=useNavigate();

    const logincheck=(e)=>{
        e.preventDefault();
    

    if(username==="Director" && password==="Director1319")
        {
            navigate("/HRdashboardSRIBakersogl3339")
            
        }
        else{
    
            alert("Invalid Username and Password");
        }
    
        };

    
  return (
    <div className='container-fluid p-0'>
            
        <div className='container Admin'>
            <div className='row'>
               <div className='col-md-4 Logindiv'>
                  <h2 className='header'>HRLogin</h2>

                  <form onSubmit={logincheck}>

<div className='form-floating mb-3'>
            <input type='text' 
            name='Username'
            placeholder='Enter User Name'
            className='form-control'
            value={username}
            onChange={(e)=>Setusername(e.target.value)}/>

            <label> Admin UserName</label>
            
        </div>


        <div className='form-floating mb-3'>
            <input type='password' 
            name='password'
            placeholder='Enter password'
            className='form-control'
            value={password}
            onChange={(e)=>Setpassword(e.target.value)}/>

            <label> Admin Password</label>
            
        </div>

        <input className='btn btn-danger' type='submit' value="Login"/>
</form>

     </div>

               <div className='col-md-8 '>

                  <img src={Admin} alt="Adminpic"/>
                
               </div>

            </div>
        </div>

    </div>
  )
}

export default HRLogin