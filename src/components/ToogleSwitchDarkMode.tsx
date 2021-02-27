import { useState } from 'react'
import  DarkModeToggle from 'react-dark-mode-toggle'
import styles from '../styles/components/ToogleSwitchDarkMode.module.css'


export function ToggleSwitchDarkMode() {
    const [checked, setChecked] = useState(false)


    return (
        <label className={styles.toogleDarkMode}>
            <DarkModeToggle checked={checked} onChange={(e) => { setChecked(e) }} size={60}/>
        </label>
    )
}
