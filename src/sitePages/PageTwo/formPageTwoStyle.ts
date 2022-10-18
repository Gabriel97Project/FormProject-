import styled, {} from "styled-components"

export const PageTwoStyle =styled.div`
    @media(max-width: 900px) {
   width:90%;
 
 }


    p{
    font-size:13px;
    color: #B8B8D4;

}

h1{
    margin: 0 px;
    padding:0px;
    font-size:26px;
}
hr{
    height:1px;
    border: 0 ;
    background-color: #16195c;
    margin:30px 0;
}


label{
    font-size:13px;

    input{
        display:block;
        margin-top:7px;
        box-sizing: border-box;
        width:100%;
        padding:20px 10px;
        border: 2px solid #25cd89;
        border-radius: 10px;
        color : #FFF;
        outline: 0 ;
        font-size:15px;
        background-color: #02044a;

    }
   
}
 button{
        background-color:#25cd89;
        color : #FFF;
        margin-top:30px;
        font-size:14px;
        cursor:pointer;
        border-radius:20px;
        padding: 20px 40px;
        border: 0 ;
        font-weight:bold;


    }
 .backButton{
    font-size:16px;
    text-decoration:none;
    padding: 20px 40px;
    color: #B8B8D4;
 }

`