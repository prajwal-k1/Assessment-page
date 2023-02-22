import './App.css';
import Navbar from './components/Navbar';
import ReferalSection from './components/ReferalSection';
import MidSection from './components/MidSection';
import FooterSection from './components/FooterSection';
import discord from './images/discord.png';
import twitter1 from './images/twitter1.png';
import medium from './images/medium.png';

function App() {
  return (
    <div className="md:flex md:flex-col md:justify-center md:bg-gradient-to-r md:from-indigo-400 md:via-purple-300 md:to-pink-300 h-auto bg-blue-200">
      <Navbar />
      <div className='md:flex md:flex-col md:w-14 md:h-32 md:justify-center md:items-center md:absolute md:top-20 md:right-5 invisible md:visible'>
        <div className='bg-blue-200 p-2 rounded-full w-9 h-9 mb-2'><img src={twitter1} alt="" className='w-6 mt-0.5 cursor-pointer' /></div>
        <div className='bg-blue-200 p-2 rounded-full w-9 h-9 mb-2'><img src={discord} alt="" className='w-6 mt-0.5 cursor-pointer' /></div>
        <div className='bg-blue-200 p-2 rounded-full w-9 h-9'><img src={medium} alt="" className='w-6 mt-1 cursor-pointer' /></div>
      </div>
      <ReferalSection />
      <MidSection />
      <div className="flex items-center md:mx-52 mt-7 ">
        <span className='md:mr-20 text-lg tracking-wider font-semibold mx-10 sm:mx-14 md:ml-8'>REFERRALS</span>
        <div class="flex-grow h-px bg-gray-600 mr-10 md:mr-16 sm:mr-16"></div>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
