import loading_dark from '../../assets/loading_dark.svg'
import loading_light from '../../assets/loading_light.svg'
import { useContext } from 'react'
import { ThemeContext } from '../Hooks/ThemeContext'
function Loading(){
    const { theme, setTheme } = useContext(ThemeContext)
    
    return(

        <img src={theme === 'dark' ? loading_dark : loading_light} alt="Carregando..." />
    )
}

export default Loading