import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import UserContext from "../store/context";
import Placeholder from "../images/placeholder_300_300.png";
import styled from "styled-components";


const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1920px;
`;

const Card = styled.div`
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

const Image = styled.div`
    max-width: 300px;
    max-height: 300px;

    img {
        width: 100%;
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

const Error = styled.h2`
    color: ${(props) => props.theme.textColor};
    text-align: center;

    a {
        color: ${(props) => props.theme.textLink}
    }

    a:hover, a:focus {
        color: ${(props) => props.theme.textLinkHover}
`;

const WowAccounts = () => {
    const user = useContext(UserContext);

    const data = useFetch(
        `https://${user.region}.api.blizzard.com/profile/user/wow?namespace=profile-${user.region}&locale=${user.locale}`,
        "GET",
        user.token
    );

    return (
            <>
                {data.hasOwnProperty("wow_accounts") ? (
                    <Cards>
                        {data.wow_accounts[0].datas.map(
                            (data) => (
                                <Card key={data.id}>
                                    <Image>
                                        <img
                                            src={Placeholder}
                                            alt="data placeholder"
                                        />
                                    </Image>
                                    <Text>
                                        <h3>{data.name}</h3>
                                        <h4>Realm: {data.realm.name}</h4>
    
                                        <p>Level: {data.level}</p>
    
                                        <p>
                                            Class: {data.playable_class.name}
                                        </p>
    
                                        <p>Race: {data.playable_race.name}</p>
    
                                        <p>Gender: {data.gender.name}</p>
    
                                        <p>Faction: {data.faction.name}</p>
                                    </Text>
                                </Card>
                            )
                        )}
                    </Cards>
                ) : (
                    <Error>
                        Could not find any datas.
                        <br />
                        Try{" "}
                        <a href={`${process.env.REACT_APP_DOMAIN}:5000/logout`}>
                            logging out
                        </a>{" "}
                        and choosing another <u>region</u>.
                    </Error>
                )}
            </>
    );
};

export default WowAccounts;
