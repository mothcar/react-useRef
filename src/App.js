import './App.css';
import MuiBottomNavigation from './components/MuiBottomNavigation.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Favorite from './components/Favorite.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <MuiBottomNavigation/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
        
        
      </header>
    </div>
  );
}

export default App;
