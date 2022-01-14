import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    img {
        padding: 10px;
    }
`;

const WowClassicItems = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (!props.token) {
            return;
        }

        fetch(
            "https://us.api.blizzard.com/data/wow/search/media?namespace=static-us&tags=item&orderby=id&_page=1",
            {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + props.token,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setItems(data.results.slice(1, 100)))
            .catch((error) => {
                console.error("Classic items error ", error);
            });
    }, [props.token]);

    return (
        <>
            <h1>Wow classic items:</h1>
            <Items>
                {items.map((item) => (
                    <img key={item.data.id} src={item.data.assets[0].value} />
                ))}
            </Items>
        </>
    );
};

export default WowClassicItems;
