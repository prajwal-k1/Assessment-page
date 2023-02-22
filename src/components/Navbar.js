import React from 'react';
import logo from '../images/logo.png';
import shield from '../images/shield.png';
import night from '../images/night.png';
import sun from '../images/sun.png';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark')
            document.documentElement.classList.add('dark');
        else
            document.documentElement.classList.remove('dark');
    }, [theme]);

    const changeTheme = () => { setTheme(theme === 'dark' ? 'light' : 'dark'); }

    return (
        <div className='md:flex md:justify-between md:border-b-2 md:border-gray-700/25 md:px-3 md:py-1 md:items-center md:bg-blue-100 dark:bg-nav-dark
                        bg-white h-14 border-b-2 border-blue-500/50'>
            <div>
                <ul className='md:flex md:justify-between md:ml-16 md:items-center md:text-blue-900 md:font-medium md:dark:text-white invisible md:visible'>
                    <li className='md:p-2 md:flex md:justify-center md:items-center cursor-pointer flex justify-around items-center'>
                        <img src={logo} alt="" className='md:w-12 md:mr-1 invisible md:visible w-0' />
                        <p className='md:text-2xl md:font-medium md:mb-1 md:mr-4 text-xl font-semibold visible mt-2 sm:mr-80 mr-20'>Magpie</p>
                        <img src={logo} alt="" className='w-9 md:mr-1 visible md:invisible mt-2 mr-5' />
                    </li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible'>Stake</li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible'>Claim</li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible'>Lock</li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible'>Docs</li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible'>Governance</li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible'>Bribe</li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible text-blue-500'>Referral</li>
                    <li className='md:p-2 md:mr-4 cursor-pointer invisible md:visible'>
                        <button className='border-2 border-green-500 rounded-md px-3 py-1 flex justify-center items-center'>
                            <img src={shield} alt="" className='w-5 mr-1' />
                            Audited
                        </button>
                    </li>
                </ul>
            </div>
            <div className="">
                <ul className='md:flex md:items-center md:mr-16 invisible md:visible'>
                    <li className='p-2 mr-2 font-semibold cursor-pointer text-black dark:text-white'>EN</li>
                    <li className='p-2 mr-2'><button className='bg-blue-600 px-4 py-1 rounded-full text-white'>0XFA42...439DE</button></li>
                    <li className='p-2 mr-5'><img src={theme === 'dark' ? sun : night} alt="" className='w-5 cursor-pointer' onClick={changeTheme} /></li>
                </ul>
            </div>
        </div>
    )
}
