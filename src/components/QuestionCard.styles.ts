import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
    max-width : 1100px;
    background : #ebfeff;
    border-radius : 10px;
    padding : 20px;
    box-shadow : 0px 5px 10px rgba(0,0,0,0.3);
    text-align : center;
    
    p {
        font-size : 1rem;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    
    transition : all 0.3s ease;
    :hover{
        opacity : 0.8;    
    }
    button {
        cursor : pointer;
        user-select : none;
        font-size : 0.8rem;
        width : 100%;
        height : 40px;
        margin : 5px 0;
        background : ${({ correct, userClicked }) =>
            correct
            ? 'green'
            : !correct && userClicked
            ? 'orange'
            : 'blue'
        };
        border-color:white;
        color: #fff;
    }
`;