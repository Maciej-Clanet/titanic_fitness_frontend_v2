import logo from './logo.svg';
import './App.css';
import Pages from './Pages';
import DesktopHeader from "./Components/DesktopHeader/DesktopHeader"
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <DesktopHeader/>
      <Pages/>
      <Footer />
    </div>
  );
}

export default App;
