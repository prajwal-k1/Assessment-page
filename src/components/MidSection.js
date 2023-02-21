import React from 'react';
import info from '../images/information.png';
import logo from '../images/logo.png';

export default function MidSection() {
    return (
        <div className='flex mt-7 mx-60 justify-between items-center text-blue-900'>
            <div className='bg-white p-2 rounded-lg w-1/4 h-24'>
                <h4 className='text-2xl font-medium ml-4 mt-2'>0.0%</h4>
                <p className='text-sm font-normal flex items-center ml-4 mt-2'>Total Rewards <img src={info} alt="" className='w-6' /></p>
            </div>
            <div className='bg-white p-2 rounded-lg w-1/4 h-24'>
                <h4 className='text-2xl font-medium ml-4 mt-2'>0.0%</h4>
                <p className='text-sm font-normal flex items-center ml-4 mt-2'>Friends <img src={info} alt="" className='w-6' /></p>
            </div>
            <div className='bg-white py-2 px-4 rounded-lg w-2/6 h-24 flex justify-between items-center'>
                <img src={logo} alt="" className='w-12' />
                <div>
                    <h4 className='text-2xl font-medium mb-1 text-blue-600'>0 MGP</h4>
                    <p className='text-sm font-normal'>Your Rewards</p>
                </div>
                <div><button className='bg-blue-600 px-2.5 py-1.5 rounded-lg text-white'>Claim Rewards</button></div>
            </div>
        </div>
    )
}
