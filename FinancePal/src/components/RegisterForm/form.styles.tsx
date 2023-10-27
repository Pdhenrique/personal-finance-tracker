import styled from "styled-components";
import tokens from '../../tokens.json'

export const StyledContainer = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    flex-direction: column;

    
`


export const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    
    height: 600px;
    width: 50vw;
    margin-top: -25px;

    border-radius: 5px;
    box-shadow: -10px 5px 5px #e3e3e3;


    background-color: ${tokens.light};

`

export const StyledFormSection = styled.div`
    margin-top: 25px;

    width: 80%;
    height: fit-content;

    background-color: #ebebeb;
`