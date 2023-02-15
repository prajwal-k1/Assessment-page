import './App.css';
import Navbar from './components/Navbar';
import ReferalSection from './components/ReferalSection';
import MidSection from './components/MidSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 h-auto">
      <Navbar />
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
