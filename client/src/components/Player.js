import React from "react";

const Player = (props) => {
    return (
        <div>
            <h2>Player</h2>
            <h3>BattleTag: {props.currentPlayer.battletag}</h3>
            <h3>ID: {props.currentPlayer.id}</h3>
        </div>
    );
};

export default Player;
