import styled, {} from "styled-components"


export const SideBarStyle =styled.div`
    margin: 30px 0;
    cursor: pointer;
    a{
        display:flex;
        align-items: center;
        text-decoration: none;

    }
`
export const SideInfoStyle =styled.div`
    flex:1; /* flex 1 pega todo o espaço disponivel */
    margin-right:20px;
`


export const SideTitleStyle =styled.div`

    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size:15px;
    color : #FFF;
`

export const SideDescriptionStyle =styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4 ;

`

export const SideIconStyle =styled.div<{colorChange : boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.colorChange ? "#25CD89" : "#02044A"};
    display:flex;
    justify-content: center;
    align-items: center;
  
`

export const SidePointStyle =styled.div<{colorChange : boolean}>`

    width:6px;
    height: 6px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    /* esse margin right negativo é o q esta deixando o point em cima da linha 
    do side bar */
    background-color: ${props => props.colorChange ? "#25CD89" : "#02044A"};
    /* na props acima criamos um estado verdadeiro ou falso, qyua ndo for verdadeiro,
    o background color vai mudar para verde, quando for falso, vai ficaar cinza...
    o local onde estamos vai ser o verde, criamos um state para qndo o payload
    for === 1 vammos saber q estamos na pagina 1, com isso passamos a props para os
    componentes e conseguimos mudas seu estilo baseado em qual passo estamos */
 
    
`