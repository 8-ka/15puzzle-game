import './App.css';
import Header from './components/Header/Header.jsx';
import Board from './components/Game/Game.jsx';
import Nav from './components/Navigation/Nav.jsx';
import About from './components/About/About.jsx';
import Rules from './components/Rules/Rules.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className='app-main__container background'>
          <Routes>
            <Route path="/Game" element={<Board />} />
            <Route path="/About" element={<About />} />
            <Route path="/Rules" element={<Rules />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
