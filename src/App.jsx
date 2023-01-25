import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/Hooks/ThemeContext'
import Navbar from './components/Navbar'
import ScreenModes from './components/ScreenModes'
import './app.css'

function App() {

    return (
        <div className='bg-primary text-primary'>
            <ThemeProvider>
                <Navbar />
                <Outlet />
                <ScreenModes />
            </ThemeProvider>
        </div>
    )
}

export default App
