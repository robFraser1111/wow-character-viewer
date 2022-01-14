import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import WowCharacterImage from "./WowCharacterImage";
import styled from "styled-components";

const Character = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 680px;
    background-color: ${(props) => props.theme.brown};
    border: 1px solid ${(props) => props.theme.yellowDark};

    @media (max-width: ${(props) => props.theme.tablet}) {
        width: 300px;
        flex-direction: column;
    }
`;

const Text = styled.div`
    padding: 20px;

    h3 {
        color: ${(props) => props.theme.yellow};
    }

    h4 {
        color: ${(props) => props.theme.yellowDark};
    }

    p {
        margin: 8px 0;
        color: ${(props) => props.theme.yellowLight};
    }
`;

const WowCharacter = (props) => {
    const user = useContext(UserContext);

    const currentCharacter = useFetch(
        `https://${user.region}.api.blizzard.com/profile/user/wow/protected-character/${props.realmId}-${props.characterId}?namespace=profile-${user.region}&locale=${user.locale}`,
        "GET",
        user.token
    );

    return (
        <Character>
            <WowCharacterImage
                character={
                    currentCharacter.hasOwnProperty("character") &&
                    currentCharacter.character.key.href
                }
            />
            <Text>
                <h3>{props.name}</h3>
                <h4>Realm: {props.name}</h4>

                <p>Level: {props.level}</p>

                <p>Class: {props.playableClass}</p>

                <p>Race: {props.playableRace}</p>

                <p>Gender: {props.gender}</p>

                <p>Faction: {props.faction}</p>
            </Text>
        </Character>
    );
};

export default WowCharacter;
