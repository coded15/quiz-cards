import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Report from './pages/Report';

function App() {
  return(
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Report} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
  );
  
}

export default App;
