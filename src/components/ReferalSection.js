import React from 'react'

export default function ReferalSection() {
    return (
        <section className='flex items-center rounded-xl mt-7 mx-60 p-8 h-72 text-blue-900 bg-gradient-to-r from-blue-300 via-white to-white'>
            <div className='py-16 px-2 mr-14'>
                <h3 className='text-3xl mb-2.5 tracking-wide'>Refer Friends.</h3>
                <h3 className='text-2xl mb-5'>Earn <span className='text-blue-700 font-semibold'>$MGP</span> together.</h3>
                <p className='text-xs font-medium mb-2.5'>Earn upto 15% of the $MGP that your friends earn on Magpie.</p>
                <p className='text-xs font-medium'>View referral rules {'>'}</p>
            </div>
            <div className='flex flex-col rounded-xl bg-blue-100 py-4 px-8 ml-16'>
                <div className='flex items-center justify-between'>
                    <button className='border-1 bg-blue-600 px-2 py-1 rounded-md text-sm text-white font-medium mr-3'>Tier 1</button><button className='mr-32 border-1 bg-yellow-500 px-2 py-1 rounded-md text-sm italic font-medium'>Boost 5%</button>
                    <p className='text-xs font-medium mr-3 text-blue-600'>Upgrade to higher tier {'>'}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='border-1 bg-white w-44 p-3 rounded-md mt-4'>
                        <h3 className='text-xl font-semibold'>5%</h3>
                        <p className='text-sm font-normal'>You Receive</p>
                    </div>
                    <div className='border-1 bg-white w-44 p-3 mr-3 rounded-md mt-4'>
                        <h3 className='text-xl font-semibold'>0%</h3>
                        <p className='text-sm font-normal'>Friends Receive</p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-3 py-1'>
                    <h4 className='text-md font-medium'>Referral Link</h4>
                    <p className='mr-3 underline underline-offset-2 text-xs font-normal'>http://accounts/myAccount</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <h4 className='text-md font-medium'>Share on</h4>
                    <ul className='flex mr-3 text-sm font-medium'>
                        <li className='mr-2'>Twitter</li>
                        <li className=''>Telegram</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
