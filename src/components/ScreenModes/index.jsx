import './ScreenModes.css'

import { useContext } from 'react'
import { ThemeContext } from '../Hooks/ThemeContext'

import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'

function ScreenModes(){
    const { theme, setTheme } = useContext(ThemeContext)


    return <button className='btn' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}><MdOutlineDarkMode/> {theme === 'light' ? 'dark' : 'light'} </button>
}

export default ScreenModes