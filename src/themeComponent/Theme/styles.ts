import styled, {} from "styled-components";


export const ThemeStyle = styled.div`
background-color: #02044a;
color: #fff;
min-height:100vh;


`

export const SiteComponent = styled.div`
    margin:auto;
    max-width:980px;
    min-height:100vh;
    display:flex;
    flex-direction:column;

`



export const Steps = styled.div`
    display:flex;
    flex:1;
    
`






export const SideBar = styled.div`
width:250px;
border-right:1px solid #16195c;
@media(max-width: 800px) {
   display:none;
   
 }
`

export const Page = styled.div`
    flex:1;
    padding-left:40px;
    padding-top:40px;
    @media(max-width: 900px) {
        display:flex;
   align-items:center;
   justify-content:center;
   width:80%;
   padding:0px;
   
   
 }
 @media(max-width: 700px) {
   display:flex;
   align-items:center;
   justify-content:center;
 }
`
