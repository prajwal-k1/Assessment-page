import './App.css';
import Navbar from './components/Navbar';
import ReferalSection from './components/ReferalSection';
import MidSection from './components/MidSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReferalSection />
      <MidSection />
      <h4>REFERRALS</h4>
      <hr />
      <FooterSection />
    </div>
  );
}

export default App;
