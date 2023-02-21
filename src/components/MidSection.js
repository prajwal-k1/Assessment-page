import React from 'react';
import info from '../images/information.png';
import logo from '../images/logo.png';

export default function MidSection() {
    return (
        <div className='md:flex md:mt-7 md:mx-60 md:justify-between md:items-center md:text-blue-900
                        grid grid-cols-2 m-auto w-5/6 mt-3 md:w-8/12'>
            <div className='bg-white p-2 rounded-lg md:w-1/4 md:h-24 w-48 h-20 px-4'>
                <h4 className='text-2xl font-medium md:ml-4 md:mt-2'>0.0%</h4>
                <p className='text-sm font-normal flex items-center md:ml-4 md:mt-2'>Total Rewards <img src={info} alt="" className='w-6 cursor-pointer' /></p>
            </div>
            <div className='bg-white p-2 rounded-lg md:w-1/4 md:h-24 w-48 ml-2 h-20 px-4'>
                <h4 className='text-2xl font-medium md:ml-4 md:mt-2'>0.0%</h4>
                <p className='text-sm font-normal flex items-center md:ml-4 md:mt-2'>Friends <img src={info} alt="" className='w-6 cursor-pointer' /></p>
            </div>
            <div className='bg-white md:py-2 px-4 rounded-lg md:w-2/6 md:h-24 grid grid-cols-2 col-span-2 items-center text-center mt-3 h-32 md:flex md:justify-between md:items-center'>
                <img src={logo} alt="" className='w-12 mt-3 ml-6 md:w-9 md:ml-0' />
                <div>
                    <h4 className='text-2xl font-medium md:mb-1 text-blue-600'>0 MGP</h4>
                    <p className='text-sm font-normal'>Your Rewards</p>
                </div>
                <div><button className='bg-blue-600 px-2.5 py-1.5 rounded-lg text-white w-80 my-3 ml-6 md:w-auto'>Claim Rewards</button></div>
            </div>
        </div>
    )
}
