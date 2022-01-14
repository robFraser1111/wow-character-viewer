import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
    text-align: center;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.bgColor};
    display: flex;
    justify-content: center;

    p {
        align-self: center;
    }

    a {
        color: ${(props) => props.theme.blue};
    }

    a:hover,
    a:focus {
        color: ${(props) => props.theme.blueLight};
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <p>
                By{" "}
                <a href="https://github.com/robFraser1111" target="_blank">
                    Rob Fraser
                </a>
                , using the{" "}
                <a href="https://develop.battle.net/" target="_blank">
                    Battle.net API
                </a>
                .
            </p>
        </Wrapper>
    );
};

export default Footer;
