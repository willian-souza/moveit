import { useEffect, useState } from 'react'
import  DarkModeToggle from 'react-dark-mode-toggle'
import useDarkMode from 'use-dark-mode'
import styles from '../styles/components/ToogleSwitchDarkMode.module.css'


export function ToggleSwitchDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(()=>false)
    const darkMode = useDarkMode(false)
    


    useEffect(()=>{
        darkMode.toggle()
    },[isDarkMode])
    

    return (
        <label className={styles.toogleDarkMode}>
            <DarkModeToggle 
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}/>
        </label>
    )

    
}
