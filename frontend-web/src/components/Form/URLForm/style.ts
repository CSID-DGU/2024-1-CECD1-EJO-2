import styled from "styled-components";

export const InputWrapper = styled.div`
    min-width: 300px;
    width: 60%;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const URLResult = styled.div`
    color: ${props => props.color || 'black'};
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
`;