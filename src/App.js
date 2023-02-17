import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout.js';
import Main from './components/mainComponent/mainComponent.js';
import Login from './components/loginComponents/loginComponent.js';
import Registration from './components/registrationComponent/registrationComponent.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Routes className='app'>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Main/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
      </Route>
    </Routes>
  );
}

export default App;
