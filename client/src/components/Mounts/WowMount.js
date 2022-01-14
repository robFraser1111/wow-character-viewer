import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import WowMountImage from "./WowMountImage";
import styled from "styled-components";

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

const WowMount = (props) => {
    const user = useContext(UserContext);

    const currentMount = useFetch(props.mount, "GET", user.token);

    return (
        <>
            <WowMountImage
                mount={
                    currentMount.hasOwnProperty("creature_displays") &&
                    currentMount.creature_displays[0].key.href
                }
            />
            <Text>
                <h3>
                    {currentMount.hasOwnProperty("name") &&
                        currentMount.name.en_US}
                </h3>
                <h4>
                    Faction:{" "}
                    {currentMount.hasOwnProperty("faction") &&
                        currentMount.faction.name.en_US}
                </h4>
                <p>
                    {currentMount.hasOwnProperty("description") &&
                        currentMount.description.en_US}
                </p>
            </Text>
        </>
    );
};

export default WowMount;
