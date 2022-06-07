import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/main.scss';
import Home from './components/pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/contact' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
