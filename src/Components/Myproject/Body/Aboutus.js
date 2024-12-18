import React from 'react';
import '../Body/module.app.css';
import Owner from './Assests/Owner.avif';
import Owner1 from './Assests/Owner-2.jpg';
import Owner2 from './Assests/Owner-3.avif';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import img11 from "./Assests/Team.jpg";
import team from "./Assests/teammembers.jpg";
import Bakers1 from "./Assests/Bakerystore.jpg";
import Bakers2 from "./Assests/Bakerystore-2.jpg";
import Bakers3 from "./Assests/Bakerystore-3.jpg";


const Aboutus = () => {
  return (
    <div className='container-fluid p-0' >

      <div className='boxbreadcrumb'>
      <div className='breadcrumb'>
      <h5 className='title'>Aboutus</h5>
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item active to="/Aboutus">Aboutus</Breadcrumb.Item>
</Breadcrumb>

</div>

      </div>
       
       <div className='container-fluid Aboutus'>
       <div className='row '>
            <div className='col-md-6 teamsimages'>
                <img src={img11} alt="team" className='mainimg'/>
                <img src={team} alt="team" className='mobileimg'/>
            </div>

            <div className='col-md-6 states '>
                <h3>Vision:</h3>
                <p>Spreading joy, one dessert at a time. At SRI Bakers, 
                  we envision a world where every celebration is infused with happiness, 
                  where each dessert we craft becomes a sweet symphony of joys.</p>

                  <h3>Mission:</h3>
                  <p>At SRI Bakers, we’re on a mission to create happiness through our delicious desserts. 
                    Crafting with care and quality ingredients, we aim to make every bite a moment to cherish. 
                    From birthdays to weddings, and every special occasion in between, 
                    we are here to sprinkle sweetness and spread smiles, one dessert at a time.</p>

            </div>  
        </div>
       </div>


          <div className='container-fluid  Corevalues p-5'>
          <div className='row'>
           <h2>Core Values</h2>
           <p>Our recipe for success</p>
            <div className='col-md-12 corevaluesi'>

             

             <li>
              <i class="bi bi-check2-circle"></i>
              <p>Integrity</p>
              </li>

              <li>
              <i class="bi bi-check2-circle"></i>
              <p>Respect</p>
              </li>

              <li>
              <i class="bi bi-check2-circle"></i>
              <p>Responsibility</p>
              </li>

              <li>
              <i class="bi bi-check2-circle"></i>
              <p>Learning</p>
              </li>

              <li>
              <i class="bi bi-check2-circle"></i>
              <p>Synergy</p>
              </li>
            </div>
            </div>
          </div>

       <div className='container-fluid m-0  stores'>
        <div className='row'>
          <h3>Our Stores</h3>
          <p className='text-start'>SRI Bakers Started as Single Store and Expanded upto 10+ Stores in Andhrapradesh.
            It's all Of Customer Support and Quality Products from SRI Bakers.As We are Consistent towards our Values We make Fine Products according to Customer Perception. </p>
          <div className='col-md-4 py-2'>
              <img src={Bakers1} alt="Store"/>
          </div>

          <div className='col-md-4 py-2'>
              <img src={Bakers2} alt="Store"/>
          </div>

          <div className='col-md-4 py-2'>
              <img src={Bakers3} alt="Store"/>
          </div>

        </div>
       </div>
         
        <div className='container-fluid  text-dark directors py-2'>
        <h2 className='text-centre'>Directors</h2>
         <div className='row m-2'>

          <div className='col-md-4 Directorsection '>
        
        <div className='image'>
          <img src={Owner} alt="ownerimage"/>
        </div>
          
          <div className='caption text-center'>

               <h5> Mr.Mahesh Yelamati</h5>
               <h5>Director</h5>
          </div>
        
          </div>

          <div className='col-md-4 Directorsection'>
          
          <div className='image'>
          <img src={Owner1} alt="ownerimage"/>
        </div>
          
          <div className='caption text-center'>

               <h5>Mr.Balakrishna Yelamati</h5>
               <h5>Managing Director</h5>
          </div>


          </div>


          <div className='col-md-4 Directorsection'>
          

          <div className='image'>
          <img src={Owner2} alt="ownerimage"/>
        </div>
          
          <div className='caption text-center'>

               <h5>Mr.X</h5>
               <h5>Director</h5>
          </div>
          </div>
         
         </div>

        </div>
        


    </div>
  )
}

export default Aboutus