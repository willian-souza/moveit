import { useState } from 'react'
import { ToggleSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'


export function ToggleSwitchDarkMode() {
    const [checked, setChecked] = useState(false)


    return (
        <label>
            <span>Click me</span>
            <ToggleSwitch checked={checked} onChange={(e) => { setChecked(e) }} />
        </label>
    )
}
