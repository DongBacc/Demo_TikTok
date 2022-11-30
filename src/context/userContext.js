
import { useContext } from 'react'
import {ThemeContext,ThemeProvider} from './themContext.js'

import Context from './Context'
import styles from'./userContext.module.css'


function UseContext(){

    
    const colors=useContext(ThemeContext)
    return(
            <div style={{padding:20}}>
                <button type="button" onClick={colors.toggleTheme}>Toggle theme</button>
                <Context/>
            </div>
    )
   
}
export default UseContext