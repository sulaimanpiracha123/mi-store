import React from 'react'
import HotItemCard from "../Components/HotItemCard"
import "../styles/HotAccessiories.css"

const HotAccessiories=({music,musicCover,smartDevices,smartDeviceCover,home,homeCover,lifeStyle,lifeStylecover,mobileAccessiories,mobileAccessioriesCover})=>{
  return (
    <div className='HotAccessiories'>

        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifeStylecover || mobileAccessioriesCover } alt ="Cover"/>
        </div>
        


        <div>
        {music && music.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                   
            ))}
              {smartDevices && smartDevices.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                   
            ))}
            {home && home.map((item,index)=>(
              <HotItemCard key ={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}

            {lifeStyle && lifeStyle.map((item,index)=>(
              <HotItemCard key ={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))} 
            
              {mobileAccessiories && mobileAccessiories.map((item,index)=>(
              <HotItemCard key ={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}
            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>


        </div>





    </div>
  )
}

export default HotAccessiories