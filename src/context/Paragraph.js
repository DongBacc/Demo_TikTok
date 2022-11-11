import { useContext } from 'react'
import {ThemeContext} from './themContext.js'

function Paragraph(){
    const colors=useContext(ThemeContext)
    return(
        <div className={colors.theme}>
            <div className={colors.color}></div>
        </div>
    )
}
export default Paragraph