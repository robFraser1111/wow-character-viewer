import React from "react";
import Image from "./Image";
import Placeholder from "../../../images/wow-placeholder-300-300-01.jpg";
import styled from "styled-components";

const CharacterImage = styled.div`
    max-width: 300px;
    max-height: 300px;

    img {
        width: 300px;
        height: 300px;
    }
`;

const WowCharacterImage = () => {
    const currentCharacter = {
        _links: {
            self: {
                href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg?namespace=profile-us",
            },
        },
        id: 1,
        name: "Bigdawg",
        gender: {
            type: "MALE",
            name: {
                en_US: "Male",
                es_MX: "Masculino",
                pt_BR: "Masculino",
                de_DE: "Männlich",
                en_GB: "Male",
                es_ES: "Masculino",
                fr_FR: "Homme",
                it_IT: "Maschio",
                ru_RU: "Мужской",
                ko_KR: "남성",
                zh_TW: "男性",
                zh_CN: "男性",
            },
        },
        faction: {
            type: "ALLIANCE",
            name: {
                en_US: "Alliance",
                es_MX: "Alianza",
                pt_BR: "Aliança",
                de_DE: "Allianz",
                en_GB: "Alliance",
                es_ES: "Alianza",
                fr_FR: "Alliance",
                it_IT: "Alleanza",
                ru_RU: "Альянс",
                ko_KR: "얼라이언스",
                zh_TW: "聯盟",
                zh_CN: "联盟",
            },
        },
        race: {
            key: {
                href: "https://us.api.blizzard.com/data/wow/playable-race/1?namespace=static-1-us",
            },
            name: {
                en_US: "Dwarf",
                es_MX: "Enano",
                pt_BR: "Anão",
                de_DE: "Zwerg",
                en_GB: "Dwarf",
                es_ES: "Enano",
                fr_FR: "Nain",
                it_IT: "Nano",
                ru_RU: "Дворф",
                ko_KR: "드워프",
                zh_TW: "矮人",
                zh_CN: "矮人",
            },
            id: 3,
        },
        character_class: {
            key: {
                href: "https://us.api.blizzard.com/data/wow/playable-class/1?namespace=static-1-us",
            },
            name: {
                en_US: "Paladin",
                es_MX: "Paladín",
                pt_BR: "Paladino",
                de_DE: "Paladin",
                en_GB: "Paladin",
                es_ES: "Paladín",
                fr_FR: "Paladin",
                it_IT: "Paladino",
                ru_RU: "Паладин",
                ko_KR: "성기사",
                zh_TW: "聖騎士",
                zh_CN: "圣骑士",
            },
            id: 2,
        },
        active_spec: {
            key: {
                href: "https://us.api.blizzard.com/data/wow/playable-specialization/1?namespace=static-1-us",
            },
            name: {
                en_US: "Protection",
                es_MX: "Protección",
                pt_BR: "Proteção",
                de_DE: "Schutz",
                en_GB: "Protection",
                es_ES: "Protección",
                fr_FR: "Protection",
                it_IT: "Protezione",
                ru_RU: "Защита",
                ko_KR: "보호",
                zh_TW: "防護",
                zh_CN: "防护",
            },
            id: 69,
        },
        realm: {
            key: {
                href: "https://us.api.blizzard.com/data/wow/realm/69?namespace=dynamic-us",
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
            id: 69,
            slug: "bathtub",
        },
        level: 69,
        experience: 69,
        achievement_points: 69,
        achievements: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/achievements?namespace=profile-us",
        },
        titles: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/titles?namespace=profile-us",
        },
        pvp_summary: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/pvp-summary?namespace=profile-us",
        },
        encounters: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/encounters?namespace=profile-us",
        },
        media: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/character-media?namespace=profile-us",
        },
        last_login_timestamp: 69,
        average_item_level: 69,
        equipped_item_level: 69,
        specializations: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/specializations?namespace=profile-us",
        },
        statistics: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/statistics?namespace=profile-us",
        },
        mythic_keystone_profile: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/mythic-keystone-profile?namespace=profile-us",
        },
        equipment: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/equipment?namespace=profile-us",
        },
        appearance: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/appearance?namespace=profile-us",
        },
        collections: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/collections?namespace=profile-us",
        },
        reputations: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/reputations?namespace=profile-us",
        },
        quests: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/quests?namespace=profile-us",
        },
        achievements_statistics: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/achievements/statistics?namespace=profile-us",
        },
        professions: {
            href: "https://us.api.blizzard.com/profile/wow/character/bathtub/bigdawg/professions?namespace=profile-us",
        },
    };

    return (
        <CharacterImage>
            {currentCharacter.hasOwnProperty("media") ? (
                <Image characterImage={currentCharacter.media.href} />
            ) : (
                <img src={Placeholder} />
            )}
        </CharacterImage>
    );
};

export default WowCharacterImage;
