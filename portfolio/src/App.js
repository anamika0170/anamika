import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ProjectDetails from './pages/ViewDetailsProject';
import AllProjects from './pages/AllProjects';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/projects' element={<AllProjects/>}/>
          <Route path='/project/:id' element={<ProjectDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
