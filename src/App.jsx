import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScreenModes from './components/ScreenModes'
function App() {

    return (
        <div >
            <Navbar />
            <Outlet />
            <ScreenModes/>
        </div>
    )
}

export default App
