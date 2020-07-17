import styled from "styled-components";

export const StyledMovieList = styled.div`
    .layout-title {
      margin-left: 10%;
      text-align: left;
      line-height: 2;
      cursor: pointer;
      font-size: calc(10px + 2vmin)
    }

    .movie-title:hover {
        color: #ffbf00;
        text-decoration: underline;
    }
`;