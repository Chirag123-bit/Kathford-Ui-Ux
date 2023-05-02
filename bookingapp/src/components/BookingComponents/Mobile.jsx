import React from 'react'
import "./mob.css"
import image1 from "../../images/mobile.png"

const Mobile = () => {
    return (
        <div id="mobSection" className='container'>
            <div id="mob-content">

                <div id="mob-image-container">
                    <img src={image1} alt="Mobile" />
                </div>
                <div id="mob-text-container">
                    <h4>Manage Booking From Your Phone</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate facere aut labore, expedita deserunt tempora corrupti earum sed nisi, nesciunt ex autem molestiae obcaecati? Eum mollitia ab perferendis quae quas molestiae fugiat perspiciatis laborum consequuntur! Quis, fuga ullam? Aut reiciendis suscipit ratione, autem expedita fugit sint accusamus et pariatur?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mobile