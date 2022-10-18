import styled, { } from "styled-components"


export const HeaderStyle = styled.div`

    padding: 25px 0;
    border-bottom: 1px solid #16195c;
    @media(max-width: 900px) {
    
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    }

    h1{
        margin: 0 ;
        padding: 0 ;
        font-size:28px;
    }
    p{
        font-size:14px;
        color:#B8B8D4;
    }
    
`