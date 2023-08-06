import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Finance from './pages/finance'
import Management from './pages/management'
import Report from './pages/report'
import Advertise from './pages/advertise'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Routes>
        <Route path='/finance' element={<Finance/>}/>
      </Routes>
      <Routes>
        <Route path='/management' element={<Management/>}/>
      </Routes>
      <Routes>
        <Route path='/report' element={<Report/>}/>
      </Routes>
      <Routes>
        <Route path='/advertise' element={<Advertise/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
