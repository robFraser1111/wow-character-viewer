import React, { useContext } from "react";
import Image from "./Image";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import Placeholder from "../../images/wow-placeholder-300-300-01.jpg";
import styled from "styled-components";

const CharacterImage = styled.div`
    max-width: 300px;
    max-height: 300px;

    img {
        width: 300px;
        height: 300px;
    }
`;

const WowCharacterImage = (props) => {
    const user = useContext(UserContext);

    const currentCharacter = useFetch(props.character, "GET", user.token);

    return (
        <CharacterImage>
            {currentCharacter.hasOwnProperty("media") ? (
                <Image characterImage={currentCharacter.media.href} />
            ) : (
                <img src={Placeholder} />
            )}
        </CharacterImage>
    );
};

export default WowCharacterImage;
