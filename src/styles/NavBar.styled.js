import styled from 'styled-components'

const StyledNavBar = styled.header `
    background-color: #171717;
    padding-left: 3rem;
    padding-right: 3rem;
    display: flex;
    justify-content: space-between;
    color: white;

     Link h1{
        text-decoration: none;
        color: red;

    }

    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    h5{
        font-size: 1rem;
        margin-right: 1rem;

    }
    img{
        width: 4rem;
        height: 4rem;
        border-radius: 50px;
    }

`

export default StyledNavBar