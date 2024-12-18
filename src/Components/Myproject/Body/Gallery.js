import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Figure from 'react-bootstrap/Figure';
import '../Body/module.app.css';

import img1 from './Assests/Choclatecookie.avif';
import img2 from './Assests/Ccookies.jpg';
import img3 from './Assests/ChoclateCookiees3.jpg';
import img4 from './Assests/ChoclateDonut.jpg';
import img5 from './Assests/ChoclateGallery.avif';
import img6 from './Assests/ChoclateStraw.avif';
import img7 from './Assests/CustomisiedCakes.jpg';
import img8 from './Assests/CustomisiedCookie.jpg';
import img9 from './Assests/BirthdayCakes.jpg';
import img10 from './Assests/BirthdayCakes2.jpg';
import img11 from './Assests/Muffins.avif';
import img12 from './Assests/Muffins2.jpg';
import img13 from './Assests/Pastrie1.jpg';
import img14 from './Assests/Pastrie2.jpg';
import img15 from './Assests/Pastrie3.jpg';
import img16 from './Assests/Pastrie4.jpg';
import img17 from './Assests/SaltCookie.jpg';
import img18 from './Assests/Candy3.jpg';
import img19 from './Assests/Candy4.avif';
import img20 from './Assests/Candy5.jpg';
import img21 from './Assests/Candy7.jpg';
import img23 from './Assests/replle-2.jpg';
import img24 from './Assests/BirthdayCakes.jpg';
import img25 from './Assests/repple-3.jpg';




const Gallery = () => {
  return (
    <div className='container-fluid p-0'>

  <div className='boxbreadcrumb'>
  <div className='breadcrumb'>
    <h4>Gallery</h4>
<Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active to="/Gallery"> Gallery</Breadcrumb.Item>
    
    </Breadcrumb>
</div>
  </div>
          
          <h3>SRI Bakers Serves Different Varieties of Products</h3>
  <div className='container-fluid Gallery'>
      <div className='row'>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img4} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Pink with Choclate Coated Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-1876</h6>
     
    </Figure>
        </div>


        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img5} alt="image1"
      />

<h6><span className='text-danger'>Name:</span> Choclate  Cake</h6>
<h6><span className='text-danger'>Product Code:</span>CA-3976</h6>
   
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img6} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Vinella with strawberry Coated Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-4976</h6>
     
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img7} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Vinella with Blueberry Coated Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-5976</h6>
    </Figure>
        </div>
      </div>
  </div>


  <div className='container-fluid Gallery'>
      <div className='row'>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img9} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Birthday Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-9976</h6>
     
    </Figure>
        </div>


        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img10} alt="image1"
      />
   <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
   <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img11} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img12} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>
      </div>
  </div>


  <div className='container-fluid Gallery'>
      <div className='row'>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img13} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>


        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img14} alt="image1"
      />
   <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
   <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img15} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img16} alt="image1"
      />

<h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
<h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>
      </div>
  </div>


  <div className='container-fluid Gallery'>
      <div className='row'>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img18} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>


        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img19} alt="image1"
      />
   <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
   <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img20} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img21} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>
      </div>
  </div>


  <div className='container-fluid Gallery'>
      <div className='row'>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img24} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>


        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img1} alt="image1"
      />
   <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
   <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img2} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img25} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>
      </div>
  </div>

  <div className='container-fluid Gallery'>
      <div className='row'>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img8} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>


        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img17} alt="image1"
      />
   <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
   <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img23} alt="image1"
      />
     <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
     <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>

        <div className='col-md-3 figuresgallery'>
        <Figure>
      <Figure.Image className='figureimage'
        src={img3} alt="image1"
      />
      <h6><span className='text-danger'>Name:</span> Vinella with Choclate Coated Cake</h6>
      <h6><span className='text-danger'>Product Code:</span>CA-2976</h6>
    </Figure>
        </div>
      </div>
  </div>
  



    </div>
  )
}

export default Gallery