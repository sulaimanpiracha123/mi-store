import React from 'react'
import "../styles/Prenavbar.css"
const cartIcon = <svg className="temp" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>

function PreNavbar() {
  return (
    <div className='preNav'>
        <div>
        <a href="https://mistore.pk/">MI PAKISTAN</a><span>|</span>
        <a href='https://in.event.mi.com/in/install-mi-store'>GET MISTORE APP</a><span>|</span>
        <a href = "https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAILSTORE</a>
        </div>
        <div>
        <a href="">SIGNIN</a><span>|</span>
        <a href="">SIGNUP</a><span>|</span>

        <a href="https://store.mi.com/in/site/login">{cartIcon}CART</a>

        </div>  




    </div>
  )
}

export default PreNavbar