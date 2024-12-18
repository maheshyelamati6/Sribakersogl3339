import React, { useState } from 'react';
import './module.app.css';
import Viewcakespage from './Viewcakespage';
import Welcomepage from './Welcomepage';
import Viewcakes from './Viewcakes';
import Cookies from './Cookies';
import Viewcookies from './Viewcookies';
import Enquiry from './Enquiry';

const HRdashboardSRIbakersogl = () => {
    const[view,setView]=useState("");

    const Dashboardview=()=>{

        let show = "";

        if(view ===""){
            show = <Welcomepage/>
        }

        else if(view ==="Cakes"){
            show = <Viewcakes/>
        }


        else if(view ==="Viewcakes"){

            show = <Viewcakespage/>
        }
        else if(view ==="Cookies"){
            show = <Cookies/>
        }

        else if(view ==="Viewcookies"){
            show = <Viewcookies/>
        }

        else if(view ==="Enquiry"){
            show = <Enquiry/>
        }

        return show;

    };
  return (
    <div className='container-fluid board  text-center'>
              
    <div className='row'>
      <aside className='col-md-2  Admin'>
      <h2 className='header'>Hrdashboard</h2>

     
      
      <button className='buttons' onClick={()=>setView("Cakes")}>Cakes</button>
      <button className='buttons' onClick={()=>setView("Viewcakes")}>View Cakes</button>
      <button className='buttons' onClick={()=>setView("Cookies")}>Cookies</button>
      <button className='buttons' onClick={()=>setView("Viewcookies")}>View Cookies</button>
      <button className='buttons' onClick={()=>setView("Enquiry")}>Enquiry</button>
      </aside>


      <div className='col-md-10 '>

          {Dashboardview(view)}
</div>

    </div>
        


    </div>
  )
}

export default HRdashboardSRIbakersogl