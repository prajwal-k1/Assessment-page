import React from 'react'

export default function MidSection() {
    return (
        <div className='mid-section'>
            <div className='small-section'>
                <h4>0.0%</h4>
                <p>Total Rewards <div className='rounded-i'>i</div></p>
            </div>
            <div className='small-section'>
                <h4>0.0%</h4>
                <p>Friends <div className='rounded-i'>i</div></p>
            </div>
            <div className='small-section'>
                <div>Logo</div>
                <div>
                    <h4>0 MGP</h4>
                    <p>Your Rewards</p>
                </div>
                <div><button>Claim Rewards</button></div>
            </div>
        </div>
    )
}
