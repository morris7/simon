import React from 'react';
import styled from 'styled-components';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as GameButtonActions from '../../actions/gameButton';
import {GameButtonProps, StyleProps} from './GameButton.types';

const GameButton = (props: GameButtonProps) => (
    <StyledGameButton colour={props.colour}
        onClick={() => props.action.gameButtonClick(props.colour) }
        className={props.className}/>
);

const StyledGameButton = styled.button`
    display: flex;
    width: 40%;
    height: 40%;
    margin: 5%;
    background-color: light${(props: StyleProps) => props.colour === 'red' ? 'pink': props.colour};
    box-shadow: 2px 2px #999;
    border-radius: 10px;
    &:focus, &:focus{
        outline: none;
    }
    transform: scale(1);
    transition-duration: 1s;
    &.active {
        background-color: ${(props: StyleProps) => props.colour};
        transform: scale(1.1);
        transition-duration: 1s;
    }
`;


function mapDispatchToProps(dispatch:any) {
    return {
        action: bindActionCreators(GameButtonActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(GameButton);