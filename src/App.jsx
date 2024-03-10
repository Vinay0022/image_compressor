import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx';
import Main2 from './components/Main2.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
<>
        <Navbar/>
        <Router>
        <Routes>
        <Route path='/' element={<Main/>} />
        <Route path="/image_cropper/*" element={<Main2/>} />
        </Routes>
        </Router>
</>
);
}
export default App;
