import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Routes>
      </Router>
    </div>
  );
}
export default App;
