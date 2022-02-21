import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import WowMount from "./WowMount";
import styled from "styled-components";

const Mounts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${(props) => props.theme.laptop};

  @media (min-width: ${(props) => props.theme.tablet}) {
    &:after {
      content: "";
      width: 700px;
    }
  }
`;

const Mount = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 680px;
  background-color: ${(props) => props.theme.brown};
  border: 1px solid ${(props) => props.theme.yellowDark};

  @media (max-width: ${(props) => props.theme.tablet}) {
    width: 300px;
    flex-direction: column;
  }
`;

const Message = styled.h2`
    color: ${(props) => props.theme.white};
    text-align: center;

    a {
        color: ${(props) => props.theme.blue}
    }

    a:hover, a:focus {
        color: ${(props) => props.theme.blueLight}
`;

const WowMounts = () => {
  const user = useContext(UserContext);

  const currentMounts = useFetch(
    `https://${user.region}.api.blizzard.com/profile/user/wow/collections/mounts?namespace=profile-${user.region}&locale=${user.locale}`,
    "GET",
    user.token
  );

  if (currentMounts.hasOwnProperty("mounts")) {
    return (
      <Mounts>
        {currentMounts.mounts.map((thisMount) => (
          <Mount key={thisMount.mount.id}>
            <WowMount mount={thisMount.mount.key.href} />
          </Mount>
        ))}
      </Mounts>
    );
  } else if (currentMounts === "error" || typeof currentMounts === "object") {
    return (
      <Message>
        Could not find any mounts.
        <br />
        Try{" "}
        <a
          href={
            `https://wow-character-app.herokuapp.com/logout`}
        >
          logging out
        </a>{" "}
        and choosing another <u>region</u>.
      </Message>
    );
  } else {
    return <Message>Loading...</Message>;
  }
};

export default WowMounts;
