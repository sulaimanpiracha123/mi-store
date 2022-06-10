import React from 'react'

function HotAccessiories({music,musicCover}) {
  return (
    <div className='HotAccessiories'>

        <div>
            <img src={musicCover} alt ="Cover"/>
        </div>
    </div>
  )
}

export default HotAccessiories