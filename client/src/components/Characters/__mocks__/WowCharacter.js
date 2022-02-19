import React from "react";
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
    const currentCharacter = {
        _links: {
            self: {
                href: "https://us.api.blizzard.com/profile/user/wow/protected-character/1?namespace=profile-us",
            },
            user: {
                href: "https://us.api.blizzard.com/profile/user",
            },
            profile: {
                href: "https://us.api.blizzard.com/profile/user/wow?namespace=profile-us",
            },
        },
        id: 1,
        name: "Bigdawg",
        money: 1,
        character: {
            key: {
                href: "https://us.api.blizzard.com/profile/wow/character/barthilas/bigdawg?namespace=profile-us",
            },
            name: "bigdawg",
            id: 1,
            realm: {
                key: {
                    href: "https://us.api.blizzard.com/data/wow/realm/1?namespace=dynamic-us",
                },
                name: "Bathtub",
                id: 1,
                slug: "bathtub",
            },
        },
        protected_stats: {
            total_number_deaths: 1,
            total_gold_gained: 1337,
            total_gold_lost: 0,
            total_item_value_gained: 1337,
            level_number_deaths: 0,
            level_gold_gained: 1337,
            level_gold_lost: 0,
            level_item_value_gained: 1337,
        },
        position: {
            zone: {
                name: "Crusty pub",
                id: 1,
            },
            map: {
                name: "Australia",
                id: 1,
            },
            x: 1,
            y: -1,
            z: 10,
            facing: 1.5,
        },
        bind_position: {
            zone: {
                name: "Crusty pub tavern",
                id: 1,
            },
            map: {
                name: "Eastern Australia",
                id: 0,
            },
            x: -1,
            y: 400.5,
            z: 102,
            facing: 5.1,
        },
        wow_account: 1,
    };

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
