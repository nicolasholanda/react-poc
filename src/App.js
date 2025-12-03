import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
