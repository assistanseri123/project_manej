import Home from './pages/home/Home'
import Topbar from './component/topbar/Topbar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Article from './component/article/Article'
import About from "./pages/about/about"
import Contact from "./pages/contact/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/register' element={user ? <Home/> : <Register/>}/>
        <Route path='/login' element={user ? <Home/> : <Login/>}/>
        <Route path='/write' element={user ?<Write/>:<Register/>}/>
        <Route path='/setting' element={user?<Setting/>:<Register/>}/>
        <Route path='/about' element={user?<About/>:<Register/>}/>
        <Route path='/contact' element={user?<Contact/>:<Register/>}/>
        <Route path='/post/:postId' element={<Single/>}/>
      </Routes>
    </Router>
  )
}

export default App
