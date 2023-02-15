import React from 'react'

export default function MidSection() {
    return (
        <div className='flex mt-7 mx-60 justify-between items-center'>
            <div className='bg-pink-500 p-2 rounded-lg w-1/4 h-24'>
                <h4 className='text-2xl font-medium ml-4 mt-2'>0.0%</h4>
                <p className='text-sm font-normal flex items-center ml-4 mt-2'>Total Rewards <div className='rounded-xl bg-orange-400 w-4 h-4 text-center ml-1 text-xs'>i</div></p>
            </div>
            <div className='bg-pink-500 p-2 rounded-lg w-1/4 h-24'>
                <h4 className='text-2xl font-medium ml-4 mt-2'>0.0%</h4>
                <p className='text-sm font-normal flex items-center ml-4 mt-2'>Friends <div className='rounded-xl bg-orange-400 w-4 h-4 text-center ml-1 text-xs'>i</div></p>
            </div>
            <div className='bg-pink-500 py-2 px-4 rounded-lg w-2/6 h-24 flex justify-between items-center'>
                <div>Logo</div>
                <div>
                    <h4 className='text-2xl font-medium mb-1'>0 MGP</h4>
                    <p className='text-sm font-normal'>Your Rewards</p>
                </div>
                <div><button className='bg-blue-400 px-2.5 py-1.5 rounded-lg'>Claim Rewards</button></div>
            </div>
        </div>
    )
}
