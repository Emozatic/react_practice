import { useContext } from "react"
import ThemeContext from "./ThemeContext"

function Theme(){
    let theme= useContext(ThemeContext)
    return(
        <>
        <h1>Current Theme: {theme}</h1>
        </>
    )
}

export default Theme;