import styled from "styled-components";

export const StyledForm = styled.div`

    margin-top: 8%;
    max-width: 580px;
    margin-right: auto;
    margin-left: auto;
    
    fieldset {
          padding: 0;
          margin: 0;
          border: 0;
    }
    fieldset + fieldset {
        margin-top: 24px;
    }
    
    label {
        margin-bottom: 8px;
        margin-top: 8px;
        display: block;
        color: white;
        font-size: calc(10px + 1.5vmin);
        font-weight: bold;
    }
    
    input, textarea {
        padding: 8px;
        margin-bottom: 8px;
        width: 100%;
        background-color: #282c34;
        color: white;
        font-size: calc(10px + 1.25vmin);
        border-top: 0;
        border-right: 0;
        border-bottom: 1px solid #ffbf00;
        border-left: 0;
        -webkit-transition: border-bottom-color .15s ease-in;
        transition: border-bottom-color .15s ease-in;
    }
    
    input:focus,
    textarea:focus {
        outline: 0;
        background-color: #49515f;
        border-bottom-color: #ffc926;
    }
    
    textarea {
        margin-top: 8px;
        resize: none;
        font: inherit;
    }
    
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
    
    form button {
        margin-right: auto;
        margin-left: auto;
        margin-top: 1rem;
    }
    
    button:focus:active {
        background-color: #FFDC73;
    }
    
    button:focus {
        outline: thick double #FFDC73;
    }
    
    button:hover {
        background-color: #FFC926;
    }
    
    p {
        color: #ffbf00;
        cursor: pointer;
    }
    
    p:hover {
        text-decoration: underline;
    }
`;