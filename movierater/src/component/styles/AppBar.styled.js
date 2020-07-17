import styled from "styled-components";

export const StyledAppBar = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    text-align: center;
    min-height: 10vh;
    font-size: calc(10px + 2vmin);
    
    .fa-film {
        color: #ffbf00;
        font-size: 2em;
        transform: rotate(45deg);
    }
    
      button {
        margin-top: 1rem;
        float: right;
        padding: 1rem;
        font-size: 1rem;
        text-transform: uppercase;
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
  

`;