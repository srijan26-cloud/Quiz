import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height : 100%;
    }
    body {
        background-color: #eee;
        margin : 0;
        padding : 0 20px;
        display : flex;
        justify-content : center;
    }
    *{
        box-sizing : border-box;
        font-family : 'Catamaran' sans-serif;
        
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    
    > p {
            color : #fff;
        }
    .score {
        color : #aaa;
        font-size : 2rem;
        margin : 0;
    }
    h1{
        font-family : Algerian;
        font-size : 55px;
        text-align : center;
        margin : 20px;
        font-weight:400;
        color:orange;
        background : transparent; 
    }
    h3{
        font-style : italic;
        color:orange;
    }
    .start , .next {
        cursor : pointer;
        background-color: white;
        color: black;
        border-radius : 10px;
        height : 40px;
        margin : 20px 0;
        padding : 0 40px;
    }
    .start:hover , .next:hover {
        cursor : pointer;
        background-color: green;
        color: #fff;
    .start{
       max-width:200px; 
    }

`
