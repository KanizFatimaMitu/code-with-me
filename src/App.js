import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Header from './Shared/Header/Header';
import Classes from './Pages/Classes/Classes';
import About from './Pages/About/About';
import Profile from './Pages/Profile/Profile';



function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/classes" element={<Classes></Classes>}></Route>
        <Route path="/blog" element={<About></About>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
