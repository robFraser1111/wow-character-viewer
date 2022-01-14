import React, { useState, useEffect, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import styled from "styled-components";
import Placeholder from "../../images/wow-placeholder-300-300-01.jpg";

const Image = styled.div`
    max-width: 300px;
    max-height: 300px;

    img {
        width: 300px;
        height: 300px;
    }
`;

const WowPet = (props) => {
    const user = useContext(UserContext);

    const petImage = useFetch(props.imageUrl, "GET", user.token);

    return (
        <Image>
            {petImage.hasOwnProperty("assets") ? (
                <img src={petImage.assets[0].value} />
            ) : (
                <img src={Placeholder} />
            )}
        </Image>
    );
};

export default WowPet;
