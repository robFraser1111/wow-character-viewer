import { useState, useEffect } from "react";

const useFetch = (url = "", method = "GET", token = "") => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(url, {
            method: method,
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((output) => setData(output))
            .catch((error) => {
                console.error("Fetching error: " + error);
                setData("error");
            });
    }, [url, method, token]);

    return data;
}

export default useFetch;
