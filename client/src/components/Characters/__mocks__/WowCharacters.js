import React from "react";
import WowCharacter from "./WowCharacter";
import styled from "styled-components";

const Characters = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: ${(props) => props.theme.laptop};

    @media (min-width: ${(props) => props.theme.tablet}) {
        &:after {
            content: "";
            width: 700px;
        }
    }
`;

const Message = styled.h2`
    color: ${(props) => props.theme.white};
    text-align: center;

    a {
        color: ${(props) => props.theme.blue}
    }

    a:hover, a:focus {
        color: ${(props) => props.theme.blueLight}
`;

const WowCharacters = () => {
    const currentCharacters = {
        _links: {
            self: {
                href: "https://us.api.blizzard.com/profile/user/wow?namespace=profile-us",
            },
            user: {
                href: "https://us.api.blizzard.com/profile/user",
            },
            profile: {
                href: "https://us.api.blizzard.com/profile/user/wow?namespace=profile-us",
            },
        },
        id: 1,
        wow_accounts: [
            {
                id: 1,
                characters: [
                    {
                        character: {
                            href: "https://us.api.blizzard.com/profile/wow/character/blackrock/character-1?namespace=profile-us",
                        },
                        protected_character: {
                            href: "https://us.api.blizzard.com/profile/user/wow/protected-character/1?namespace=profile-us",
                        },
                        name: "Character-1",
                        id: 1,
                        realm: {
                            key: {
                                href: "https://us.api.blizzard.com/data/wow/realm/1?namespace=dynamic-us",
                            },
                            name: "Somerock",
                            id: 1,
                            slug: "somerock",
                        },
                        playable_class: {
                            key: {
                                href: "https://us.api.blizzard.com/data/wow/playable-class/1?namespace=static-1-us",
                            },
                            name: "Rat Knight",
                            id: 1,
                        },
                        playable_race: {
                            key: {
                                href: "https://us.api.blizzard.com/data/wow/playable-race/1?namespace=static-1-us",
                            },
                            name: "Rat",
                            id: 1,
                        },
                        gender: {
                            type: "FEMALE",
                            name: "Female",
                        },
                        faction: {
                            type: "ALLIANCE",
                            name: "Alliance",
                        },
                        level: 1,
                    },
                    {
                        character: {
                            href: "https://us.api.blizzard.com/profile/wow/character/barthilas/bigdawg?namespace=profile-us",
                        },
                        protected_character: {
                            href: "https://us.api.blizzard.com/profile/user/wow/protected-character/2?namespace=profile-us",
                        },
                        name: "Bigdawg",
                        id: 2,
                        realm: {
                            key: {
                                href: "https://us.api.blizzard.com/data/wow/realm/2?namespace=dynamic-us",
                            },
                            name: "Bathtub",
                            id: 2,
                            slug: "bathtub",
                        },
                        playable_class: {
                            key: {
                                href: "https://us.api.blizzard.com/data/wow/playable-class/2?namespace=static-2-us",
                            },
                            name: "Monk",
                            id: 2,
                        },
                        playable_race: {
                            key: {
                                href: "https://us.api.blizzard.com/data/wow/playable-race/2?namespace=static-2-us",
                            },
                            name: "Pandaren",
                            id: 2,
                        },
                        gender: {
                            type: "MALE",
                            name: "Male",
                        },
                        faction: {
                            type: "ALLIANCE",
                            name: "Alliance",
                        },
                        level: 2,
                    },
                ],
            },
        ],
        collections: {
            href: "https://us.api.blizzard.com/profile/user/wow/collections?namespace=profile-us",
        },
    };

    console.log("Characters " + currentCharacters);

    if (currentCharacters.hasOwnProperty("wow_accounts")) {
        return (
            <Characters>
                {currentCharacters.wow_accounts[0].characters.map(
                    (character) => (
                        <WowCharacter
                            character={character.href}
                            key={character.id}
                            characterId={character.id}
                            realmId={character.realm.id}
                            name={character.name}
                            realm={character.realm.name}
                            level={character.level}
                            playableClass={character.playable_class.name}
                            playableRace={character.playable_race.name}
                            gender={character.gender.name}
                            faction={character.faction.name}
                        />
                    )
                )}
            </Characters>
        );
    } else if (
        currentCharacters === "error" ||
        typeof currentCharacters === "object"
    ) {
        return (
            <Message>
                Could not find any characters.
                <br />
                Try{" "}
                <a href={`${process.env.REACT_APP_DOMAIN}:5000/logout`}>
                    logging out
                </a>{" "}
                and choosing another <u>region</u>.
            </Message>
        );
    } else {
        return <Message>Loading...</Message>;
    }
};

export default WowCharacters;
