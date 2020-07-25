import React from "react";
import { bool } from 'prop-types';
import { StyledMenu } from "./styles/Menu.styled";

const Menu = ({ open }) => {

    return (
        <StyledMenu open={open}>
            <a href="/">
                Home
            </a>
            <a href="/movies">
                See all movies
            </a>
            <a href="/signin">
                Sign In / Sign Up
            </a>

        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;