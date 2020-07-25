import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { StyledAppBar } from "./styles/AppBar.styled";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function AppBar() {

    // eslint-disable-next-line
    const [token, setToken, deleteToken] = useCookies(['mr-token']);
    const history = useHistory();

    const logoutUser = () => {
        deleteToken('mr-token');
        history.push('/');
    }

    useEffect( () => {
        if(!token['mr-token']) {
            document.getElementById('logout').style.display='none';
        } else document.getElementById('logout').style.display='inline';
    }, [token])

    return (

        <StyledAppBar>
            <h1>
                <span><a href='/'><FontAwesomeIcon icon={faFilm} /></a> </span>
                   The Nic Cage Direct to Video Movie Rater
                <button id='logout' onClick={logoutUser}>
                    Sign Out
                </button>
            </h1>
        </StyledAppBar>
    )
}

export default AppBar;