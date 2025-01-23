import {  Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Athletes from './pages/Athletes/Athletes'
import Events from './pages/Events/Events'
import Countries from './pages/Countries/Countries'
import Login from './pages/Login/login'
import SignUp from './pages/SignUp/register'
import ProtectedRoute from './components/ProtectedRoute'
import Medalist from './pages/Medalist/Medalist'
import Tickets from './pages/Ticket/Tickets'
function Logout(){
    localStorage.clear();
    console.log("Logged out. Tokens removed.");
    return <Navigate to='/login' />
}

function RegisterAndLogout(){
    localStorage.clear();
    console.log("Tokens removed.");
    return <SignUp/>     
 }  

function App() {
return (

    <Routes>

        <Route path='/' element ={<Home />} />
        <Route path='/athletes' element ={<Athletes />} />
        <Route path='/events' element ={<Events />} />
        <Route path='/countries' element ={<Countries />} />
        <Route path='/login' element ={<Login />} />
        <Route path='/logout' element ={<Logout />} />
        <Route path='/signup' element ={<RegisterAndLogout />} />
        <Route path='/medalist' element ={<Medalist />} />  
        <Route path='/buyticket' element ={<ProtectedRoute> <Tickets/> </ProtectedRoute>} />
    </Routes>
    
    )
}

export default App
