import React from 'react'
import "./feat.css"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"
import image4 from "../../images/5.png"

const Featured = () => {
    return (
        <div id="feat-section" className='container'>
            <h3>Featured Houses</h3>

            <div className="listings-container d-flex justify-content-between">
                <div className="listing">
                    <img src={image1} alt="" />

                    <div className="listing-text">
                        <h5>Kathmandu, Nepal</h5>
                        <p>$20,000/Night</p>
                    </div>

                    <div className="btn-container text-center">
                        <button className='btn'>View More</button>
                    </div>
                </div>
                <div className="listing">
                    <img src={image2} alt="" />

                    <div className="listing-text">
                        <h5>Kathmandu, Nepal</h5>
                        <p>$20,000/Night</p>
                    </div>

                    <div className="btn-container text-center">
                        <button className='btn'>View More</button>
                    </div>
                </div>
                <div className="listing">
                    <img src={image3} alt="" />

                    <div className="listing-text">
                        <h5>Kathmandu, Nepal</h5>
                        <p>$20,000/Night</p>
                    </div>

                    <div className="btn-container text-center">
                        <button className='btn'>View More</button>
                    </div>
                </div>
                <div className="listing">
                    <img src={image4} alt="" />

                    <div className="listing-text">
                        <h5>Kathmandu, Nepal</h5>
                        <p>$20,000/Night</p>
                    </div>

                    <div className="btn-container text-center">
                        <button className='btn'>View More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured