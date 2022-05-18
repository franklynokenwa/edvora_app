import styled from 'styled-components'

const StyledNavLinks = styled.section`
    color: #D0CBCB;
    padding-left:3rem;
    padding-right: 3rem;
    display: flex;
    justify-content: space-between;
    background-color: #292929;

    section{
        display: flex;
        width: 33rem;
        justify-content: space-between;
        align-items: center;
    }

    p a{
        text-decoration: none;
        color: #D0CBCB;

    }
   
   section p:hover{
        border-bottom: 2px solid #FFFFFF;
    }
    section p a:hover{
        color: #FFFFFF;
    }

`

export default StyledNavLinks