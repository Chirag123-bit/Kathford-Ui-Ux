import React from 'react'
import "./work.css"

const Work = () => {
    return (
        <div id="howItWorks">
            <h3 className='m-auto text-center'>How It Works?</h3>
            <div className="steps container d-flex justify-content-between mt-3">
                <div className="step d-flex">
                    <i class="fa-solid fa-house"></i>
                    <div className="step-text">
                        <h6>Find A Listing</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, quos?</p>
                    </div>
                </div>
                <div className="step d-flex">
                    <i class="fa-solid fa-user"></i>
                    <div className="step-text">
                        <h6>Talk to an Agent</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, quos?</p>
                    </div>
                </div>
                <div className="step d-flex">
                    <i class="fa-solid fa-dollar-sign"></i>
                    <div className="step-text">
                        <h6>Set A Date</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, quos?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work