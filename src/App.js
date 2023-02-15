import './App.css';
import Navbar from './components/Navbar';
import ReferalSection from './components/ReferalSection';
import MidSection from './components/MidSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <ReferalSection />
      <MidSection />
      <div className="flex items-center mx-60 mt-7">
        <span className='mr-20 text-lg tracking-widest'>REFERRALS</span>
        <div class="flex-grow h-px bg-gray-400 mr-2"></div>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
