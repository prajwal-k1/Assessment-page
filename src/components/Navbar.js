import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between border-b-2 p-3 items-center'>
            <div className=''>
                <ul className='flex justify-between ml-16 items-center'>
                    <li className='p-2 text-2xl mb-1 mr-4'>Magpie</li>
                    <li className='p-2 mr-4'>Stake</li>
                    <li className='p-2 mr-4'>Claim</li>
                    <li className='p-2 mr-4'>Lock</li>
                    <li className='p-2 mr-4'>Docs</li>
                    <li className='p-2 mr-4'>Governance</li>
                    <li className='p-2 mr-4'>Bribe</li>
                    <li className='p-2 mr-4'>Referral</li>
                    <li className='p-2 mr-4'>
                        <button className='border-2 border-green-500 rounded-md px-4 py-1.5'>
                            <a href="https://www.flaticon.com/free-icons/shield" title="shield icons">i</a>
                            Audited
                        </button>
                    </li>
                </ul>
            </div>
            <div className="">
                <ul className='flex items-center mr-16'>
                    <li className='p-2 mr-4'>EN</li>
                    <li className='p-2 mr-4'><button className='bg-blue-400 px-4 py-0.5 rounded-full'>Account num</button></li>
                    <li className='p-2 mr-4'>Logo</li>
                </ul>
            </div>
        </div>
    )
}
