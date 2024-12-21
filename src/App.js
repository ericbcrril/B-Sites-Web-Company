import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Vistas
import Home from './views/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
