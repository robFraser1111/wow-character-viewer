import React, { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
// import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import UserContext from "./store/context";
import WowCharacters from "./components/Characters/WowCharacters";
import Tabs from "./components/Tabs";
import WowMounts from "./components/Mounts/WowMounts";
import WowPets from "./components/Pets/WowPets";
import Footer from "./components/Footer";

import Bg1 from "./images/wow-background-01.jpg";
import Bg2 from "./images/wow-background-02.jpg";
import Bg3 from "./images/wow-background-03.jpg";
import Bg4 from "./images/wow-background-04.jpg";
import Bg5 from "./images/wow-background-05.jpg";
import Bg6 from "./images/wow-background-06.jpg";

import styled, { ThemeProvider } from "styled-components";

// Background images
const Bgs = [Bg1, Bg2, Bg3, Bg4, Bg5, Bg6];

// Set background image
const backgroundImage = Bgs[Math.floor(Math.random() * Bgs.length)];

const theme = {
    // Colours
    bgColor: "rgba(21, 23, 30, 0.7)",
    white: "#fefefe",
    brown: "#211510",
    yellow: "#f8b700",
    yellowDark: "#b1997f",
    yellowLight: "#ebdec2",
    blue: "#006fb2",
    blueDark: "#00629e",
    blueLight: "#007bc6",

    // Animation
    transition: "0.2s",

    // Breakpoints
    mobile: "320px",
    tablet: "768px",
    laptop: "1920px",
    desktop: "2560px",
};

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 200px auto 100px;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.bgColor};
    background-blend-mode: color;
    background-attachment: fixed;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    .hide {
        display: none;
    }
`;

const Section = styled.section`
    padding: 20px;
    flex: 2;
`;

function App() {
    const currentPlayer = useFetch("/api");

    const [region, setRegion] = useState("");
    const [locale, setLocale] = useState("");
    const [token, setToken] = useState("");
    const [tab, setTab] = useState("Characters");

    const buttons = ["Mounts", "Characters", "Pets"];

    // Set and Store Region and Locale in local storage so values don't get reset on page reload
    useEffect(() => {
        if (localStorage.getItem("region") === "") {
            localStorage.setItem("region", "us");
        }

        if (localStorage.getItem("locale") === "") {
            localStorage.setItem("locale", "en_US");
        }

        setRegion(localStorage.getItem("region"));
        setLocale(localStorage.getItem("locale"));
    }, []);

    // Manage the form inputs
    const regionHandler = (e) => {
        setRegion(e.target.value);
        localStorage.setItem("region", e.target.value);
    };
    const localeHandler = (e) => {
        setLocale(e.target.value);
        localStorage.setItem("locale", e.target.value);
    };

    // Manage the selected tabs
    const tabHandler = (e) => {
        setTab(e.target.value);
    };

    // Set token only if the call to the Api was successful
    useEffect(() => {
        if (currentPlayer.hasOwnProperty("token")) {
            setToken(currentPlayer.token);
        } else {
            return;
        }
    }, [currentPlayer]);

    return (
        <UserContext.Provider
            value={{
                token: token,
                region: region,
                locale: locale,
            }}
        >
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <Header
                        heading="Character Viewer"
                        currentPlayer={currentPlayer}
                    />
                    <Main>
                        {token === "" && (
                            <LoginForm
                                regionHandler={regionHandler}
                                localeHandler={localeHandler}
                            />
                        )}

                        {token !== "" && (
                            <>
                                <Tabs
                                    tabHandler={tabHandler}
                                    buttons={buttons}
                                    currentTab={tab}
                                />
                                <Section
                                    className={
                                        tab === "Characters" ? "show" : "hide"
                                    }
                                >
                                    <WowCharacters />
                                </Section>
                                <Section
                                    className={
                                        tab === "Mounts" ? "show" : "hide"
                                    }
                                >
                                    <WowMounts />
                                </Section>
                                <Section
                                    className={tab === "Pets" ? "show" : "hide"}
                                >
                                    <WowPets />
                                </Section>
                            </>
                        )}
                    </Main>
                    <Footer />
                </Wrapper>
            </ThemeProvider>
        </UserContext.Provider>
    );
}

export default App;
