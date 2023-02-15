import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between border-b-2 border-gray-700/25 p-3 items-center bg-blue-100'>
            <div className=''>
                <ul className='flex justify-between ml-16 items-center text-blue-900 font-medium'>
                    <li className='p-2 text-2xl font-medium mb-1 mr-4'>Magpie</li>
                    <li className='p-2 mr-4'>Stake</li>
                    <li className='p-2 mr-4'>Claim</li>
                    <li className='p-2 mr-4'>Lock</li>
                    <li className='p-2 mr-4'>Docs</li>
                    <li className='p-2 mr-4'>Governance</li>
                    <li className='p-2 mr-4'>Bribe</li>
                    <li className='p-2 mr-4'>Referral</li>
                    <li className='p-2 mr-4'>
                        <button className='border-2 border-green-500 rounded-md px-4 py-1'>
                            <a href="https://www.flaticon.com/free-icons/shield" title="shield icons"></a>
                            Audited
                        </button>
                    </li>
                </ul>
            </div>
            <div className="">
                <ul className='flex items-center mr-16'>
                    <li className='p-2 mr-2'>EN</li>
                    <li className='p-2 mr-2'><button className='bg-blue-600 px-4 py-0.5 rounded-full text-white'>Account num</button></li>
                    <li className='p-2 mr-5'>Logo</li>
                </ul>
            </div>
        </div>
    )
}
