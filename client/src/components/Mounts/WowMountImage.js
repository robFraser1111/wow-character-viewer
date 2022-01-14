import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import Placeholder from "../../images/wow-placeholder-300-300-01.jpg";
import styled from "styled-components";

const Image = styled.div`
    max-width: 300px;
    max-height: 300px;

    img {
        width: 300px;
        height: 300px;
    }
`;

const WowMountImage = (props) => {
    const user = useContext(UserContext);

    const currentMount = useFetch(props.mount, "GET", user.token);

    return (
        <Image>
            {currentMount.hasOwnProperty("assets") ? (
                <img src={currentMount.assets[0].value} />
            ) : (
                <img src={Placeholder} />
            )}
        </Image>
    );
};

export default WowMountImage;
