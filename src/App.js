import './App.css';
import Navbar from './Components/Navbar';
import PreNavbar from './Components/PreNavbar';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Slider from './Components/Slider';
import data from "./data/data.json";
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import StarProduct from './Components/StarProduct';
import HotAccessioriesMenue from './Components/HotAccessioriesMenue'
import HotAccessiories from './Components/HotAccessiories';

function App() {
  return (
    <Router>
 <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer} />
      <Heading text = "STAR PRODUCTS"/>
      <StarProduct starproduct = {data.starProduct}/>
      <Heading text = "HOT ACCESSORIES"/>
      <HotAccessioriesMenue/>
      <Route exact path='/music'>
        <HotAccessiories music ={data.hotAccessories.music} musiccover = {data.hotAccessoriesCover.music}/>
      </Route>
      


    </Router>

     
  );
}

export default App;
