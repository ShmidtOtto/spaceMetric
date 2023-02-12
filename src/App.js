import Header from './components/headerComponent/headerComponent.js';
import Main from './components/mainComponent/mainComponent.js';
import Footer from './components/footerComponent/footerComponent.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="app container">
      <div className='col'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
