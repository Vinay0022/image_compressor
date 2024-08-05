import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx';
import Main2 from './components/Main2.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
	const[token,setToken]= useState(null);

	useEffect(()=>{
const storedToken =localStorage.getItem("token");
setToken(storedToken);
	},[])

	const logout =()=>{
		localStorage.removeItem("token");
setToken(null);
	}

    return (
<>
        <Router>
        <Navbar token={token} logout={logout}/>
        <Routes>
        <Route path='/' element={<Main/>} />
        <Route path="/image_cropper/*" element={<Main2/>} />
        <Route path="/login/*" element={<Login setToken={setToken} />} />
        <Route path="/register/*" element={<Register/>} />
        </Routes>
        </Router>
</>
);
}
export default App;
