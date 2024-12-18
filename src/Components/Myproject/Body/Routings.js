import React from 'react';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import Gallery from './Gallery';
import Contactus from './Contactus';
import Errorpage from './Errorpage';
import Cakesdetails from '../Cakesdetails';
import Cookiesdetail from '../Cookiesdetail';
import {Route,Routes} from 'react-router-dom';
import Welcomepage from './Admin/Welcomepage';
import HRLogin from './Admin/HRLogin';
import HRdashboardSRIbakersogl from './Admin/HRdashboardSRIbakersogl';
import Cakesmainpage from './Cakesmainpage';
import Cookiesmainpage from './Cookiesmainpage';
const Routings = () => {
  return (
    <Routes>

      
        <Route path='/' element={<Homepage/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="*" element={<Errorpage/>}/>
        <Route path="/Cakesmainpage" element={<Cakesmainpage/>}/>
        <Route path="/Cakesdetails/:id" element={<Cakesdetails/>}/>
        <Route path="/Cookiesmainpage" element={<Cookiesmainpage/>}/>
        <Route path="/Cookiesdetail/:id" element={<Cookiesdetail/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/AdminsriBakersoglpage" element={<Welcomepage/>}/>
        <Route path="/Adminhrloginpagesribakers" element={<HRLogin/>}/>
        <Route path="/hrdashboardsribakersogl3339" element={<HRdashboardSRIbakersogl/>}/>
        
    </Routes>
  )
}

export default Routings