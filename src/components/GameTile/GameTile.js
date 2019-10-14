import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from "styled-css-grid";
import { FaStar } from 'react-icons/fa';

import './GameTile.scss'


function GameTile(props) {
    let game_tile_image_class = "game-tile-image";
    let game_tile_class = "game-tile";

    return(
        <div className={game_tile_class}>
            <Grid columns={2}>
                <Cell width={2}>{props.title}</Cell>
                <Cell width={2}>
                    <img src={props.imageURL}
                         alt={props.title + "_image"}
                         className={game_tile_image_class} />
                </Cell>
                <Cell width={1}>Price: {props.price} / Week</Cell>
                <Cell width={1}><FaStar/> {props.rating}</Cell>
            </Grid>
        </div>
    )
}

GameTile.propTypes = {
    title: PropTypes.string,
    imageURL: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
};

export default GameTile;
