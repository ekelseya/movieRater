import styled from "styled-components";

export const StyledMovieDetail = styled.div`

    margin: 0 10%;
    padding: 0;
    line-height: 1;
    cursor: default;
    
    p {
        font-size: calc(10px + 1.25vmin);
        line-height: 1.5;
    }
    
    span {
        display: inline;
    }
    
    .stars-rated {
        color: #ffbf00;
    }
    
    .stars-unrated {
        color: white;
    }
    
    .half-stars-unrated {
        display: none;
    }
    
    .rating-container {
        margin-top: .5rem;
        padding-bottom: 1rem;
        border-top: 2px solid #ffbf00;
    }
    
    .rating-container .fa-star {
        font-size: 1.75rem;
        cursor: pointer;
    }
`;