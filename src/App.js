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
    <div className="flex flex-col justify-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 h-auto">
      <Navbar />
      <div className='flex flex-col w-14 h-32 justify-center items-center absolute top-24 right-1'>
        <div className='bg-blue-300 p-2 rounded-full w-9 h-9 mb-2'><img src={twitter1} alt="" className='w-6 mt-0.5' /></div>
        <div className='bg-blue-300 p-2 rounded-full w-9 h-9 mb-2'><img src={discord} alt="" className='w-6 mt-0.5' /></div>
        <div className='bg-blue-300 p-2 rounded-full w-9 h-9'><img src={medium} alt="" className='w-6 mt-1' /></div>
      </div>
      <ReferalSection />
      <MidSection />
      <div className="flex items-center mx-60 mt-7">
        <span className='mr-20 text-lg tracking-wider font-semibold'>REFERRALS</span>
        <div class="flex-grow h-px bg-gray-600 mr-2"></div>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
