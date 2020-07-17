import styled from "styled-components";

export const StyledMovieDetail = styled.div`

    margin: 0 10%;
    padding: 0;
    line-height: 1;
    
    p {
      font-size: calc(10px + 1.25vmin);
      line-height: 1.5;
    }
    
    .stars-rated {
      color: #ffbf00;
    }
    
    .stars-unrated {
      color: white;
    }
    
    .rating-container {
      margin-top: .5rem;
      padding-bottom: 1rem;
      border-top: 2px solid #ffbf00;
      cursor: default;
    }
    
    .rating-container .fa-star {
      font-size: 1.75rem;
      cursor: pointer;
    }
        
    .fa-edit:hover {
      color: #ffbf00;
    }
    
    .fa-trash:hover {
        color: #ffbf00;
    }
     
    span {
      width: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding-bottom: .75rem;
      font-size: calc(10px + 1vmin)
    }
    
    span .icon {
      cursor: pointer;
      padding: .25rem;
    }
    
`;