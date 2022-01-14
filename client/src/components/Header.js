import React, { useContext } from "react";
import UserContext from "../store/context";
import styled from "styled-components";
import WowLogo from "../images/wow-logo-01.png";

const Wrapper = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.textColor};

    h1 {
        align-self: center;
        font-size: 2rem;
    }
`;

const Items = styled.section`
    max-width: 1920px;
    display: flex;
    align-items: center;
    max-width: 1920px;
    width: 100%;
    justify-content: space-between;

    img {
        width: 100%;
        transition: 0.2s;
    }

    img:hover, img: focus {
        opacity: 0.8;
    }

    h1 {
        margin-bottom: 8px;
    }

    h4 {
        margin-top: 8px;
        margin-left: 40px;
        font-weight: 600;
    }
`;

const Left = styled.div`
    margin-right: 40px;
`;

const Right = styled.div`
    margin-bottom: 40px;
`;

const Item = styled.section`
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1920px;
    width: 100%;
    justify-content: center;
`;

const Logout = styled.a`
    color: ${(props) => props.theme.textColor};
    border: 1px solid ${(props) => props.theme.textColor};
    padding: 10px 20px;

    &:hover,
    &:focus {
        color: ${(props) => props.theme.bgColor};
        background-color: ${(props) => props.theme.textColor};
    }
`;

const Header = (props) => {
    const user = useContext(UserContext);

    if (user.token === "") {
        return (
            <Wrapper>
                <Item>
                    <div>
                        <a href={`${process.env.REACT_APP_DOMAIN}:3000`}>
                            <img src={WowLogo} alt="WoW Logo" />
                        </a>
                    </div>
                </Item>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Items>
                    <Left>
                        <a href={`${process.env.REACT_APP_DOMAIN}:3000`}>
                            <img src={WowLogo} alt="WoW Logo" />
                        </a>
                        <h4>
                            BattleTag: <b>{props.currentPlayer.battletag}</b>
                        </h4>
                    </Left>
                    <Right>
                        <Logout
                            href={`${process.env.REACT_APP_DOMAIN}:5000/logout`}
                        >
                            Logout
                        </Logout>
                    </Right>
                </Items>
            </Wrapper>
        );
    }
};

export default Header;
