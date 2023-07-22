
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* dont fgt tto create a page for 404 */}
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
