import logo from './logo.svg';
import './App.css';
import Pages from './Pages';
import DesktopHeader from './Components/DesktopHeader/DesktopHeader';
import MobileHeader from './Components/MobileHeader/MobileHeader';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <DesktopHeader />
      <MobileHeader/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
