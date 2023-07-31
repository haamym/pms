
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Facilities from './pages/Facilities';
import Maintainance from './pages/Maintainance';
import AccessCard from './pages/AccessCard'
import Parking from './pages/Parking'
import Reports from './pages/Reports'
import Advertisement from './pages/Advertisement'
import Setting from './pages/Setting'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
        <Route path='/maintainance' element={<Maintainance/>}/>
        <Route path='/AccessCard' element={<AccessCard/>}/>
        <Route path='/parking' element={<Parking/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/advertisement' element={<Advertisement/>}/>
        <Route path='/setting' element={<Setting/>}/>
'


        {/* dont fgt tto create a page for 404 */}
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
