import React, { useContext } from "react";
import UserContext from "../store/context";
import styled from "styled-components";
import WowLogo from "../images/wow-logo-01.png";

const Wrapper = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
`;

const Items = styled.section`
  max-width: ${(props) => props.theme.laptop};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  h1 {
    margin-bottom: 8px;
  }

  p {
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
  max-width: ${(props) => props.theme.laptop};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const Logout = styled.a`
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.white};
  padding: 10px 20px;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.white};
  }
`;

const Logo = styled.img`
  width: 100%;
  transition: ${(props) => props.theme.transition};

  &:hover, &: focus {
    opacity: 0.8;
  }
`;

const Header = (props) => {
  const user = useContext(UserContext);

  if (user?.token === "") {
    return (
      <Wrapper>
        <Item>
          <div>
            <a
              href={
                `/`}
            >
              <Logo src={WowLogo} alt="WoW Logo" />
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
            <a
              href={
                `/`}
            >
              <Logo src={WowLogo} alt="WoW Logo" />
            </a>
            <p>
              {props?.currentPlayer?.battletag ? (
                <>
                  <small>
                    BattleTag: <b>{props?.currentPlayer?.battletag}</b>
                  </small>
                </>
              ) : (
                ""
              )}
            </p>
          </Left>
          <Right>
            <Logout
              href={
                `${process.env.REACT_APP_DOMAIN}/logout`}
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
