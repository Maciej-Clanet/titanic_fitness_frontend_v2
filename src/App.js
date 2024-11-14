import logo from './logo.svg';
import './App.css';
import Pages from './Pages';
import DesktopHeader from './Components/DesktopHeader/DesktopHeader';

function App() {
  return (
    <div className="App">
      <DesktopHeader />
      <Pages/>
    </div>
  );
}

export default App;
