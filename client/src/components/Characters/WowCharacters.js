import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import WowCharacter from "./WowCharacter";
import styled from "styled-components";

const Characters = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1920px;

    @media (min-width: ${(props) => props.theme.tablet}) {
        &:after {
            content: "";
            width: 700px;
        }
    }
`;

const Message = styled.h2`
    color: ${(props) => props.theme.textColor};
    text-align: center;

    a {
        color: ${(props) => props.theme.textLink}
    }

    a:hover, a:focus {
        color: ${(props) => props.theme.textLinkHover}
`;

const WowCharacters = () => {
    const user = useContext(UserContext);

    const currentCharacters = useFetch(
        `https://${user.region}.api.blizzard.com/profile/user/wow?namespace=profile-${user.region}&locale=${user.locale}`,
        "GET",
        user.token
    );

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
