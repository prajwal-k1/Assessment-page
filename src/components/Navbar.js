import React from 'react';
import logo from '../images/logo.png';
import shield from '../images/shield.png';
import night from '../images/night.png';

export default function Navbar() {
    return (
        <div className='flex justify-between border-b-2 border-gray-700/25 px-3 py-1 items-center bg-blue-100'>
            <div>
                <ul className='flex justify-between ml-16 items-center text-blue-900 font-medium'>
                    <li className='p-2 flex justify-center items-center cursor-pointer'>
                        <img src={logo} alt="" className='w-12 mr-1' />
                        <p className='text-2xl font-medium mb-1 mr-4'>Magpie</p>
                    </li>
                    <li className='p-2 mr-4 cursor-pointer'>Stake</li>
                    <li className='p-2 mr-4 cursor-pointer'>Claim</li>
                    <li className='p-2 mr-4 cursor-pointer'>Lock</li>
                    <li className='p-2 mr-4 cursor-pointer'>Docs</li>
                    <li className='p-2 mr-4 cursor-pointer'>Governance</li>
                    <li className='p-2 mr-4 cursor-pointer'>Bribe</li>
                    <li className='p-2 mr-4 cursor-pointer'>Referral</li>
                    <li className='p-2 mr-4 cursor-pointer'>
                        <button className='border-2 border-green-500 rounded-md px-3 py-1 flex justify-center items-center'>
                            <img src={shield} alt="" className='w-5 mr-1' />
                            Audited
                        </button>
                    </li>
                </ul>
            </div>
            <div className="">
                <ul className='flex items-center mr-16'>
                    <li className='p-2 mr-2 font-semibold cursor-pointer'>EN</li>
                    <li className='p-2 mr-2'><button className='bg-blue-600 px-4 py-1 rounded-full text-white'>0XFA42...439DE</button></li>
                    <li className='p-2 mr-5'><img src={night} alt="" className='w-5 cursor-pointer' /></li>
                </ul>
            </div>
        </div>
    )
}
