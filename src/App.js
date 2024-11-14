import logo from './logo.svg';
import './App.css';
import Pages from './Pages';
import DesktopHeader from './Components/DesktopHeader/DesktopHeader';
import MobileHeader from './Components/MobileHeader/MobileHeader';

function App() {
  return (
    <div className="App">
      <DesktopHeader />
      <MobileHeader/>
      <Pages/>
    </div>
  );
}

export default App;
