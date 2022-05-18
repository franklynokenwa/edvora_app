import styled from 'styled-components'

const StyledRide = styled.section`
    background-color: #171717;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 1rem;
    padding: 2rem;
    color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;

    img{
        width:19rem;
        height: 10.5rem;
    }

    section{
        display: flex;
        justify-content: space-between;
        width: 45rem;
    }
    section div{
        text-align:left;
        position: relative;
        top: -1rem;
        height: 11.5rem;
        color: white;
        width: 19.8rem;
    }
    div p{
        color:#959595;
    }
    div span{
        color: white;
    }
    aside{
        display: flex;
        justify-content: space-between;
    }
    aside p{
        background-color: #0A0A0A;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align:center;
        border-radius: 15px;
        margin-left:1rem ;
        padding-left: 1rem;
        padding-right:1rem;
    }
`

export default StyledRide