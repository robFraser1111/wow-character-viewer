import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import UserContext from "../../store/context";
import Placeholder from "../../images/wow-placeholder-300-300-01.jpg";

const Image = (props) => {
    const user = useContext(UserContext);

    const currentImage = useFetch(props.characterImage, "GET", user.token);

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
