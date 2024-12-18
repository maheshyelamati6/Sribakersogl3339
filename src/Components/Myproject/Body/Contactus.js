import React,{useState} from 'react';
import axios from 'axios';
import '../Body/module.app.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Enquire from './Assests/Enquiries.avif';


const Contactus = () => {
  
  const[name,Setname]=useState('');
  const[lastname,Setlastname]=useState('');
  const[mobilenumber,Setmobilenumber]=useState('');
  const[email,Setemail]=useState('');
  const[Message,Setmessage]=useState('');
  

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
  const submitdata= (e) =>{
    e.preventDefault();

    if(name.length===0)
      {
      alert("First Name should not be Empty");
    }

    else if(name.length<3) {
      alert("First Name should be More than 3 Characters");
    }
   
    else if(lastname.length===0){
      alert("Last Name should not be Empty");
    }

    else if(mobilenumber.length === 0){
      alert("Mobile Number should not be Empty");
    }

    else if(mobilenumber.length<10){
      alert("Mobile Number should be 10 Digits!!!");
    }
    
    else if(mobilenumber.length >10){
      alert("Mobile Number should not  be greater than 10 Digits!!!");
    }
    
    else if(email.length===0){
      alert("E-mail Id should not be Empty");
    }

    else if(!emailPattern.test(email)){
      alert("Please Enter Valid E-mail Id");
    }

   else if(Message.length===0){
      alert("Please Enter Message!!!");
      
    }
 
   else 
   {
    axios.post("https://sribakersogl3339-default-rtdb.firebaseio.com/Enquiry.json",{name,lastname,email,mobilenumber,Message})
    .then(()=>{
      alert("Data Posted Successfully!....");
      Setname("");
      Setlastname("");
      Setemail("");
      Setmobilenumber("");
      Setmessage("");
    })
    .catch((err)=>{
      console.log(err);
    })
   }

  }




  


  return (
    <div className='container-fluid p-0'>

<div className='boxbreadcrumb'>
<div className='breadcrumb'>
 <h4>Contactus</h4>

<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active to="Contactus">Contactus</Breadcrumb.Item>
  </Breadcrumb>
</div>
</div>



<div className='container-fluid  Aboutus'>
       <div className='row'>
           <h2 className='text-centre Element'> Reach Here....</h2>

           <div className='col-md-8 form'>
           <form onSubmit={submitdata}  method='post'  >
           <div class="row py-3">
    <div class="col">
      <input type="text" class="form-control" placeholder="First Name" value={name} name="Name" onChange={(e)=>Setname(e.target.value)}    />
      
    </div>
    

    <div class="col">
      <input type="text" class="form-control" placeholder="LastName" value={lastname} name="Lastname" onChange={(e)=>Setlastname(e.target.value)}  />
      
    </div>

      
           
  </div>
  <div class="row py-3">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Mobile Number" value={mobilenumber} onChange={(e)=>Setmobilenumber(e.target.value)}  />
       
    </div>

    <div class="col">
      <input type="email" class="form-control" placeholder="Enter E-mail Address" name="email" value={email} onChange={(e)=>Setemail(e.target.value)}    />
      
    </div>
    

  </div>
   
  <div class="row py-2">
  <div class="col">
          <textarea className="form-control textarea" placeholder="Leave a comment here :)"  name="Message"  value={Message} onChange={(e)=>{Setmessage(e.target.value)}}  />
          </div>

</div>
 <div className='button py-2'>
 <button className='btn btn-warning' type='submit'> Submit </button>
            
          
 </div>

            </form>
           </div>


      <div className='col-md-4 p-0 Contactcimage'>

       <img src={Enquire} alt="Contact"/>
        
      </div>
            
  </div>
</div>


<div className='container-fluid p-0'>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5870598364277!2d80.01543837326729!3d15.50662845425714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01784486784b%3A0xfc3146ab8354d575!2sAmaravathi%20Heights!5e0!3m2!1sen!2sin!4v1720596788111!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
</div>



 </div>     
        
       
       
  
  )
}

export default Contactus