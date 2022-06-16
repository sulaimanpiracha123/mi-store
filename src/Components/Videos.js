import React from 'react'
import VideoCard from './VideoCard'
import "../styles/videos.css"

    const Videos =({video})=> {
  return (
    <div className='Videos'>
       {video.map((item,index)=>(
           <VideoCard index = {item.index} key={item.image} image = {item.image} name = {item.name}/>

       ))}


    </div>
  )
}

export default Videos