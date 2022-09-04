import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from './pokemon-module/components/navbar';

function App() {
  return (
    <div className='container mt-2'>
      <NavbarComponent/>
    </div>
  );
}

export default App;