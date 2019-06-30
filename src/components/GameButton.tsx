import React from 'react';
import styled from 'styled-components';

const GameButton = (props: GameButtonProps) => (
    <StyledGameButton colour={props.colour}></StyledGameButton>
);

interface GameButtonProps{
    colour: string
}

interface StyleProps {
    colour: string
}

const StyledGameButton = styled.button`
    display: flex;
    width: 40%;
    height: 40%;
    margin: 5%;
    background-color: ${(props: StyleProps) => props.colour};
    box-shadow: 2px 2px #999;
    border-radius: 10px;
    &:focus, &:focus{
        outline: none;
    }
`;

export default GameButton;