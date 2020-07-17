import React from "react";
import { useCookies } from "react-cookie";
import { bool } from 'prop-types';
import { StyledMenu } from "./styles/Menu.styled";
import {useHistory} from "react-router-dom";

const Menu = ({ open }) => {

    const [token, setToken, deleteToken] = useCookies(['mr-token']);
    const history = useHistory();

    const logoutUser = () => {
        deleteToken('mr-token');
        history.push('/');
    }

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