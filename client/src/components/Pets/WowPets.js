import React, { useState, useEffect, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import WowPetImage from "./WowPetImage";
import styled from "styled-components";

const Pets = styled.section`
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

const Pet = styled.div`
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

const Message = styled.h2`
    color: ${(props) => props.theme.white};
    text-align: center;

    a {
        color: ${(props) => props.theme.blue}
    }

    a:hover, a:focus {
        color: ${(props) => props.theme.blueLight}
`;

const WowPets = () => {
  const user = useContext(UserContext);

  const currentPets = useFetch(
    `https://${user.region}.api.blizzard.com/profile/user/wow/collections/pets?namespace=profile-${user.region}&locale=${user.locale}`,
    "GET",
    user.token
  );

  if (currentPets.hasOwnProperty("pets")) {
    return (
      <Pets>
        {currentPets.pets.map((pet) => (
          <Pet key={pet.id}>
            <WowPetImage imageUrl={pet.creature_display.key.href} />
            <Text>
              <h3>{pet.hasOwnProperty("species") && pet.species.name}</h3>
              <h4>Type: {pet.hasOwnProperty("quality") && pet.quality.name}</h4>
              {pet.hasOwnProperty("stats") && (
                <>
                  <p>Health: {pet.stats.health}</p>
                  <p>Power: {pet.stats.power}</p>
                  <p>Speed: {pet.stats.speed}</p>
                </>
              )}
            </Text>
          </Pet>
        ))}
      </Pets>
    );
  } else if (currentPets === "error" || typeof currentPets === "object") {
    return (
      <Message>
        Could not find any pets.
        <br />
        Try{" "}
        <a
          href={
            `${process.env.REACT_APP_DOMAIN}/logout`}
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

export default WowPets;
