import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Footer from './Shared/Footer/Footer';
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
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
