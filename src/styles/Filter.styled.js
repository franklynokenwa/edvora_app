import styled from 'styled-components'

const StyledFilter = styled.div`
    background-color: #0A0A0A;
    color: #D0CBCB;
    display: flex;
    width: 15rem;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 3rem;
    position: absolute;
    right:2rem;

    p{
        text-align: center;
    }

    hr{
        width: 6rem;
        margin-bottom: 1rem;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
;
    }
    select{
        width: 6rem;
        height: 2rem;
        margin-bottom: 1rem;
        border-radius: 7px;
        background-color: #232323;
        color:#FFFFFF;
        border: none;
        cursor: pointer;
    }

`

export default StyledFilter