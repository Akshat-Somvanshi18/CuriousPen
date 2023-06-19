import './App.css';
import React , {useState} from 'react';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import BlogHome from './Components/BlogHome';
import CreateBlog from './Components/CreateBlog';
import Login from './Components/Login';
import DetailedBlog from './Components/DetailedBlog';
import Alert from './Components/Alert';
function App() {
  const [authenticated,setAuthenticated]=useState(localStorage.getItem("authenticated"));
  const [alertMsg,setAlertMsg] = useState(localStorage.getItem("alertMsg"));
  const [alertColor,setAlertColor] = useState(localStorage.getItem("alertColor"));


  return (
    <>
    <Router>
      <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/>
      <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/>
      <Routes>
        <Route exact path='/' element={<><Home setAuthenticated={setAuthenticated} authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
        <Route exact path='/BlogHome' element={<><BlogHome authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
        <Route exact path='/CreateBlog' element={<><CreateBlog authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
        <Route exact path='/Login' element={<><Login setAuthenticated={setAuthenticated} authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
        <Route exact path='/DetailedBlog/:ID' element={<DetailedBlog authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
