import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Vistas
import Home from './views/home';
import QuickView from './views/quickView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Inicio' element={<QuickView />} />
      </Routes>
    </Router>
  );
}

export default App;
