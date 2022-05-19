import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
 html {
    overflow-x: hidden;
    scroll-behavior: smooth;
}
    body{
        margin: 0;
        padding: 0;
        background-color: #292929;
        font-family: 'Inter', sans-serif;
        
    }
`

export default GlobalStyles