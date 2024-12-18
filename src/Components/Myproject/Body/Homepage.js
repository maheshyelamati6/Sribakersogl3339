import React,{useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import CountUp from "react-countup";
import Cake from '../Body/Assests/Cake-2.jpg';
import Cake2 from '../Body/Assests/Decoratedcake.jpg';

import Welcome from '../Body/Assests/Welcomecake.jpg';
import img1 from '../Body/Assests/homepage-1.jpg';
import img2 from '../Body/Assests/homepage-2.jpg';
import img3 from '../Body/Assests/homepage-3.jpg';
import img4 from '../Body/Assests/homepage-4.jpg';
import img5 from '../Body/Assests/homepage-5.jpg';
import img6 from '../Body/Assests/homepage-6.avif';
import img9 from '../Body/Assests/MorgotRobbie.jpg';
import img10 from '../Body/Assests/Markwalberg.jpg';
import img12 from '../Body/Assests/Matt-Damon.jpg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import './module.app.css';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
 
  return (
    <div className='container-fluid'>

   <div className='container Mmodal' >
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hi...All,<br/>
            Welcome to SRI Bakers Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Explore our Range of Varities!</Modal.Body>
        <img src={Welcome} alt="Welcome"/>
      </Modal>
   </div>


     
        <h2 className='heading text-center bg-body-tertiary'> Welcome to SRI Bakers</h2>
        <div className='Homepage '>
            <div className='row'>
                <div className='col-md-6 '>
                   <img src={Cake} alt="Homepagelogo" className='mainimg py-2'/>
                   <img src={Cake2} alt="Homepagelogo" className='mobileimg py-2'/>

                </div>

                   <div className='col-md-6 p-4'>
                    <h2 className='paragraph Element'>SRI Bakers</h2>
                    <p className='quote'>Bakeries are more than just places where flour and sugar come together. 
                        They are havens of warmth, comfort, and the delicious aromas that waft through the air. 
                        They hold the power to transport us back to childhood memories, evoke feelings of nostalgia, and create moments of sheer joy. 
                         We celebrate the artistry and passion that goes into crafting the perfect bakery treats.</p>

                        <p className='quote'>We believe that behind every loaf of bread, every delicate pastry, and every decadent cake lies a story waiting to be shared. So, whether you're seeking inspiration for your next baking adventure or simply looking to add a touch of sweetness to your Instagram feed, join us as we explore the wonderful world.</p>
                   </div>

            </div>

        </div>
        

        <div className='container-fluid countings py-2'>
            <div className='row'>


            <div className='countups col-md-3'> 
               <div className='card'>
               <h3> <CountUp
                     start={0}
                     end={10}
                     duration={5} 
                 />+</h3>
                 <h5>Years </h5>
               </div>
                 </div>


                <div className='countups col-md-3'>
              <div className='card'>

              <h3> <CountUp
                    start={0}
                    end={10}
                    duration={3} 
                /></h3>
                <h5>Branches</h5>

              </div>
                </div>
                
                

              

                <div className='countups col-md-3'>

               <div className='card'>
               <h3> <CountUp
                    start={0}
                    end={100}
                    duration={3} 
                />+</h3>
                <h5>Varities</h5>
               </div>
                </div>


                <div className='countups col-md-3'>
                   <div className='card'>
                   <h3> <CountUp
                       start={0}
                     end={100000}
                      duration={3} 
                      />+</h3>
                     <h5>Total Orders</h5>
                   </div>

                 </div>
            </div>

        </div>


               
        <div className='container-fluid  products py-2 '>
        <h2 className='heading-2 text-center'>SRI Bakers Products</h2>
        <h6 className='text-center'>Where every ingredient is chosen with care to ensure exceptional taste</h6>
            <div className='row'>
                <div className='col-md-4'>
                 <div className='productcard'>
                    <img src={img1} alt="candylogo"/>
                 </div>
                 <p>Choclate Cake</p>
                </div>

                <div className='col-md-4'>
                 <div className='productcard'>
                    <img src={img2} alt="candy-logo"/>
                 </div>
                 <p>PineApple Cake</p>
                </div>

                <div className='col-md-4'>
                 <div className='productcard'>
                    <img src={img3} alt="candy-logo"/>
                 </div>
                 <p>Full Cream Cake</p>
                </div>

            </div>
        </div>

 <div className='container-fluid mt-0 products'>
    <div className='row'>

    <div className='col-md-4'>
                 <div className='productcard'>
                    <img src={img4} alt="candylogo"/>
                 </div>
                 <p>Mixed Cake</p>
                </div>

                <div className='col-md-4'>
                 <div className='productcard'>
                    <img src={img5} alt="candy-logo"/>
                 </div>
                 <p>Plum Cake</p>
                </div>

                <div className='col-md-4'>
                 <div className='productcard'>
                    <img src={img6} alt="candy-logo"/>
                 </div>
                 <p>Fruits Cream Cake</p>
                </div>

    </div>
 </div>

<div className='container-fluid Feedback'>
<h2 className='Element text-center'>Sweet News From Customers</h2>

   <div className='row'>
     
   <div className="cards col-md-4">
  <img className="card-img-top" src={img9} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">"One of my favorite Bakers ever, 
      It’s close to my home now. So, wish the bakery lovers to visit this amazing place for sure. 
      You get best Pizzas, Cakes, Puffs, Rolls. Yummy."</p>
    <p><mark>Morgot Robbie</mark></p>
  </div>
</div>

<div className="cards col-md-4">
  <img className="card-img-top" src={img10} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text"> "Has some sitting and good option for quick bites. 
      Burger sandwich n chat are good. 
      Pizza is also good. Coffee is nicer too. One can take delivery too."</p>
    <p><mark>Mark Walberg</mark></p>
  </div>
</div>

<div className="cards col-md-4">
  <img className="card-img-top" src={img12} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">"Always loved a cake from them. On top of that SriBakers gave us loyalty discount which is cherry on top. 
      All guest loved the quality of cake devivered by KS Bakers."</p>
    <p><mark>Matt Damon</mark></p>
  </div>
</div>
      
   </div>
</div>
 
 <div className='container-fluid  Magic'>
   <div className='row'>
      <div className='Magicheaders'>

      <h4 className='magicfont'>Indulge in Pure Bliss</h4>
      <h4 className='magicfont' >Experience the Magic of SRI Bakers</h4>

      <button onClick={()=> navigate('/Gallery')} ><i class="bi bi-bag-heart"></i>Shop Now<i class="bi bi-arrow-right"></i></button>
      


      </div>
   </div>
 </div>

 <div className="App">
      <FloatingWhatsApp
        phoneNumber="+91-7799254857"
        accountName="SRI Bakers OGL"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
 
    </div>
  )
}

export default Homepage