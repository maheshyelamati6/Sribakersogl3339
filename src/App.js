import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Components/Myproject/Header';
import Routing from './Components/Myproject/Body/Routings';
import CommonFooter from './Components/Myproject/Body/CommonFooter';
import Footer from './Components/Footer';


function App() {
  return (
    
    <div className='App'>


      <Header/>
      <Routing/>
      <CommonFooter/>
      <Footer/>
       
       
    </div>
  );
}

export default App;
