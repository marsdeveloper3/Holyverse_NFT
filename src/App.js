import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Avartars from './pages/Avartars.js';
import Collections from './pages/Collections';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  /** the first page */
  //  return <Home />; 
   // return <Avartars />;
   // return <Collections/>;
   //return <About/>;
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/avartars" element={<Avartars/>}></Route>
        <Route path="/collections" element={<Collections/>}></Route>
      </Routes>
    </BrowserRouter>
   )
}

export default App;
