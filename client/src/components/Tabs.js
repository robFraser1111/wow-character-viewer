import React from "react";
import styled from "styled-components";

const Section = styled.section`
    flex: content;
    margin: 40px 0;
    // border-top: 1px solid #504137;
    // border-bottom: 1px solid #504137;
    // background-color: #211510;

    .active {
        color: #211510;
        background-color: #f8b700;
    }

    .disabled {
        color: #f8b700;
        background-color: #211510;
    }
`;

const Button = styled.button`
    border: 0;
    padding: 20px;
    margin: 20px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 400;
    width: 200px;
    border: 1px solid ${(props) => props.theme.yellowDark};

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 10px;
        width: 120px;
    }

    &:hover,
    &:focus {
        color: #211510;
        background-color: #f8b700;
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
