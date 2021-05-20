import React from 'react'
import './PlansScreen.css'

function PlansScreen() {
    
    return (
        <div className="plansScreen">
            <div className="plansScreen__plans">
                <div className="plansScreen__info">
                    <h5>Premium</h5>
                    <h6>INR 5000/yr</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div> 
            <div className="plansScreen__plans">
                <div className="plansScreen__info">
                    <h5>Standard</h5>
                    <h6>INR 3000/yr</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div> 
            <div className="plansScreen__plans">
                <div className="plansScreen__info">
                    <h5>Mobile</h5>
                    <h6>INR 1500/yr</h6>
                </div>
                <button>
                    Subscribe
                </button>
            </div>        
        </div>
    )
}

export default PlansScreen
