import React from 'react';
import { Grid, Cell } from "styled-css-grid";
import PropTypes from 'prop-types';
import GameTile from "../GameTile/GameTile";
import './GameDisplay.scss'

function GameDisplay(props) {
    const getTiles = (games) => {
        return games.map((game, index) => {
            return(
                <Cell>
                    <GameTile title={game.title}
                              imageURL={game.imageURL}
                              price={game.price}
                              rating={game.rating}
                              key={index}/>
                </Cell>
            );
        })
    };

    return(
        <Grid className="grid">
            {getTiles(props.games)}
        </Grid>
    )
}

GameDisplay.propTypes = {
    games: PropTypes.array
};

export default GameDisplay;
