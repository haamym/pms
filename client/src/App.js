import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Dashboard from './pages/dashboard';

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
    </BrowserRouter>
  );
}

export default App;
