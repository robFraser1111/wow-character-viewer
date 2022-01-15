import React from "react";
import styled from "styled-components";

const Section = styled.section`
    flex: content;
    margin: 40px 0;
    text-align: center;

    .active {
        color: ${(props) => props.theme.brown};
        background-color: ${(props) => props.theme.yellow};
    }

    .disabled {
        color: ${(props) => props.theme.yellow};
        background-color: ${(props) => props.theme.brown};
    }
`;

const Button = styled.button`
    font-size: 1.2rem;
    padding: 20px;
    margin: 20px;
    cursor: pointer;
    width: 200px;
    border: 1px solid ${(props) => props.theme.yellowDark};

    @media (max-width: ${(props) => props.theme.tablet}) {
        padding: 10px;
        width: 120px;
    }

    &:hover,
    &:focus {
        color: ${(props) => props.theme.brown};
        background-color: ${(props) => props.theme.yellow};
    }
`;

const Tabs = (props) => {
    return (
        <Section>
            {props.buttons.map((thisButton) => (
                <Button
                    className={
                        props.currentTab === thisButton ? "active" : "disabled"
                    }
                    value={thisButton}
                    onClick={props.tabHandler}
                    key={thisButton}
                >
                    {thisButton}
                </Button>
            ))}
        </Section>
    );
};

export default Tabs;
