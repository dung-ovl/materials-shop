import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Routes>
        <Route path='project' element={<Project />} />
        <Route path='project/:id' element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
