import React from "react";
import Placeholder from "../../../images/wow-placeholder-300-300-01.jpg";

const Image = () => {
    const currentImage = {
        _links: {
            self: {
                href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/character-media?namespace=profile-us",
            },
        },
        character: {
            key: {
                href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg?namespace=profile-us",
            },
            name: "Bigdawg",
            id: 1,
            realm: {
                key: {
                    href: "https://us.api.blizzard.com/data/wow/realm/1?namespace=dynamic-us",
                },
                name: {
                    en_US: "Barthilas",
                    es_MX: "Barthilas",
                    pt_BR: "Barthilas",
                    de_DE: "Barthilas",
                    en_GB: "Barthilas",
                    es_ES: "Barthilas",
                    fr_FR: "Barthilas",
                    it_IT: "Barthilas",
                    ru_RU: "Barthilas US9",
                    ko_KR: "Barthilas",
                    zh_TW: "巴瑟拉斯",
                    zh_CN: "巴瑟拉斯",
                },
                id: 1337,
                slug: "barthilas",
            },
        },
        assets: [
            {
                key: "avatar",
                value: "https://render.worldofwarcraft.com/us/character/barthilas/69/1-avatar.jpg",
            },
            {
                key: "inset",
                value: "https://render.worldofwarcraft.com/us/character/barthilas/69/1-inset.jpg",
            },
            {
                key: "main",
                value: "https://render.worldofwarcraft.com/us/character/barthilas/69/1-main.jpg",
            },
            {
                key: "main-raw",
                value: "https://render.worldofwarcraft.com/us/character/barthilas/69/1-main-raw.png",
            },
        ],
    };

    return (
        <>
            {currentImage.hasOwnProperty("assets") ? (
                <img src={currentImage.assets[2].value} />
            ) : (
                <img src={Placeholder} />
            )}
        </>
    );
};

export default Image;
