import React from 'react';
import flash from '../images/flash.png';
import twitter from '../images/twitter.png';
import telegram from '../images/telegram.png';

export default function ReferalSection() {
    return (
        <section className='md:flex md:items-center md:justify-between md:flex-row md:rounded-xl md:mt-7 md:mx-60 md:p-8 md:h-72 md:text-blue-900 md:bg-gradient-to-r md:from-blue-300 md:via-white md:to-white dark:bg-gradient-to-t dark:from-sky-700 dark:via-indigo-900 dark:to-indigo-900
                            flex flex-col bg-gradient-to-b from-blue-400 via-white to-white w-10/12 m-auto -mt-24 rounded-xl p-4 text-blue-900 md:w-8/12 '>
            <div className='md:py-16 md:px-2 md:mr-14 text-center '>
                <h3 className='md:text-3xl md:mb-2.5 md:tracking-wide text-3xl font-semibold '>Refer Friends.</h3>
                <h3 className='md:text-2xl md:mb-5 text-2xl font-semibold text-blue-900 mt-1 mb-4'>Earn <span className='text-blue-700 md:font-semibold'>$MGP</span> together.</h3>
                <p className='md:text-xs md:font-medium md:mb-2.5 text-base font-medium mb-4'>Earn upto 15% of the $MGP that your friends earn on Magpie.</p>
                <p className='md:text-xs cursor-pointer text-base font-medium mb-5'>View referral rules {'>'}</p>
            </div>
            <div className='md:flex md:flex-col md:rounded-xl md:bg-blue-100 md:py-4 md:px-8 md:ml-16
                            bg-blue-200 p-5 rounded-xl'>
                <div className='md:flex md:items-center md:justify-between '>
                    <button className=' bg-blue-600 md:px-2 md:py-1 rounded-md text-sm text-white font-medium px-2 py-1.5 md:p-1 md:w-16'>Tier 1</button><button className='md:mr-24 bg-yellow-500 md:px-1.5 md:py-1 rounded-md text-sm italic font-medium flex justify-center items-center -mt-8 ml-16 px-2 py-1.5 md:mt-0 md:ml-3 md:p-1 md:w-28'><img src={flash} alt="" className='w-4' />Boost 5%</button>
                    <p className='md:text-xs md:font-medium md:mr-3 md:text-blue-600 cursor-pointer mt-3 text-sm font-medium mb-1'>Upgrade to higher tier {'>'}</p>
                </div>
                <div className='flex md:justify-between'>
                    <div className='bg-white md:w-44 p-3 md:rounded-md rounded-lg w-3/6 md:mt-4 mr-5 md:mr-0'>
                        <h3 className='text-xl font-semibold'>5%</h3>
                        <p className='text-sm font-normal'>You Receive</p>
                    </div>
                    <div className='bg-white md:w-44 p-3 md:mr-3 md:rounded-md rounded-lg w-3/6 md:mt-4'>
                        <h3 className='text-xl font-semibold'>0%</h3>
                        <p className='text-sm font-normal'>Friends Receive</p>
                    </div>
                </div>
                <div className='flex justify-between md:items-center mt-3 md:py-1 text-sm '>
                    <h4 className='md:text-md font-medium'>Referral Link</h4>
                    <p className='md:mr-3 underline underline-offset-2 md:text-xs md:font-normal cursor-pointer'>http://accounts/myAccount</p>
                </div>
                <div className='flex justify-between items-center md:mt-2 text-sm mt-3'>
                    <h4 className='md:text-md font-medium'>Share on</h4>
                    <ul className='flex md:mr-3 md:text-sm md:font-medium'>
                        <li className='mr-4'><img src={twitter} alt="" className='w-8 cursor-pointer' /></li>
                        <li><img src={telegram} alt="" className='w-8 cursor-pointer' /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
