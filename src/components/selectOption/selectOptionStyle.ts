import styled, {} from "styled-components"


export const SelectOptionStyle = styled.div<{selected : boolean; }>`
    display:flex;
    border:2px solid /* #16195c */ ${props => props.selected ? '#25CD89' : '#16195c' };
    /* #16195c essa era a cor antiga, e foi substituida pela props selected
    e no selected vamos passar a cor q queremos caso o component seja selecionado
    nesse caso a cor da borda*/
    border-radius:10px;
    padding:10px;
    margin-bottom:8px;
    align-items:center;
    cursor:pointer;

    &:hover{
        border:2px solid #496459;
    }

`
export const IconStyle = styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    background-color:#191A59;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:25px;
    
`
export const TitleAndTextStyled = styled.div`
    display:flex;
    flex-direction:column;


`

export const TitleStyle = styled.div`
    font-size:17px;
    font-weight: bold;
    margin-bottom: 7px;


`

export const TextContentStyle = styled.div`
    font-size: 14px;
    color: #B8B8D4;
`