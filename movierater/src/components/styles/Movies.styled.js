import styled from "styled-components";

export const StyledMovies = styled.div`
    margin-top: 1rem;
    margin-left: 10%;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 16%;
    text-align: left;
    line-height: 2;
    cursor: pointer;
    font-size: calc(10px + 1.5vmin);
    
    button {
        margin-left: 10%;
        margin-top: 2rem;
        display: block;
        padding: .5rem 1rem;
        font-size: 16px;
        color: #282c34;
        background-color: #ffbf00;
        border: 0;
        border-radius: 2px;
        cursor: pointer;
        -webkit-transition: background-color .15s ease-in;
        transition: background-color .15s ease-in;
    }
    
    button:focus:active {
      background-color: #FFDC73;
    }
    button:focus {
      outline: 0;
    }
    button:hover {
      background-color: #FFC926;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        display: inline;
    }
`;
