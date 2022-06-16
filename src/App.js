import './App.css';
import Navbar from './Components/Navbar';
import PreNavbar from './Components/PreNavbar';
import {  BrowserRouter, BrowserRouter as Router,Route} from "react-router-dom"
import Slider from './Components/Slider';
import data from "./data/data.json";
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import StarProduct from './Components/StarProduct';
import HotAccessioriesMenue from './Components/HotAccessioriesMenue'
import HotAccessiories from './Components/HotAccessiories';
import ProductReview from './Components/ProductReview';
import Videos from './Components/Videos';
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
      <Route exact path="/music">
      <HotAccessiories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route>
      <Route exact path="/smartDevice">
       <HotAccessiories smartDevices={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>
       <Route exact path="/home">
         <HotAccessiories home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home}/>
       </Route>
       <Route exact path ="/lifestyle">
         <HotAccessiories lifeStyle = {data.hotAccessories.lifeStyle} lifeStylecover = {data.hotAccessoriesCover.lifeStyle}/></Route>
         <Route exact path ="/mobileAccessiories">
           <HotAccessiories mobileAccessiories = {data.hotAccessories.mobileAccessories} mobileAccessioriesCover = {data.hotAccessoriesCover.mobileAccessories}/>
       </Route>
       <Heading text = "PRODUCT REVIEWS"/>
       <ProductReview productReview={data.productReviews}/>
       <Heading text = "VIDEOS"/>
       <Videos video = {data.videos}/>

       </Router>

      
 
   
    
     
  );
}

export default App;
