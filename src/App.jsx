import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Athletes from './pages/Athletes/Athletes'
import Events from './pages/Events/Events'
import Countries from './pages/Countries/Countries'

function App() {
return (
    <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/athletes' element ={<Athletes />} />
        <Route path='/events' element ={<Events />} />
        <Route path='/countries' element ={<Countries />} />

    </Routes>
    )
}

export default App
