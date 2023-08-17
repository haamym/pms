
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
import {LoginContext } from './context/CreateContext';
import { useState,useEffect } from 'react';
const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState()
  console.log(token)

useEffect(()=>{


},[token])


  return (
    <BrowserRouter>
    <LoginContext.Provider value={{token,setToken}}>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard'>
          <Route index element={<Dashboard/>}/>
          <Route path='facilities' element={<Facilities/>}/>
          <Route path='/dashboard/maintainance' element={<Maintainance/>}/>
          <Route path='/dashboard/AccessCard' element={<AccessCard/>}/>
          <Route path='/dashboard/parking' element={<Parking/>}/>
          <Route path='/dashboard/reports' element={<Reports/>}/>
          <Route path='/dashboard/advertisement' element={<Advertisement/>}/>
          <Route path='/dashboard/setting' element={<Setting/>}/>
        </Route>
        {/* dont fgt tto create a page for 404 */}
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
