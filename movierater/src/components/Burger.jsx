import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './styles/Burger.styled';

const Burger = ({open, setOpen}) => {
    return (
        <StyledBurger aria-label="Home" open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

export default Burger;