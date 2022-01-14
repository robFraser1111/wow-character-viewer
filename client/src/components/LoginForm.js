import React, { useState, useContext } from "react";
import UserContext from "../store/context";
import SpinnerImage from "../images/spinner-battlenet-01.png";
import styled from "styled-components";

const Form = styled.form`
    color: ${(props) => props.theme.textColor};
    font-size: 1.3rem;
`;

const Select = styled.div`
    margin: 20px 0;

    label,
    select {
        display: block;
    }

    label {
        margin-bottom: 5px;
    }

    select {
        width: 100%;
        padding: 10px 5px;
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.bgColor};
        border: 1px solid ${(props) => props.theme.textColor};
    }
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.btnColor};
    border: 0;
    width: 360px;
    height: 44px;
    padding: 10px 0;
    color: ${(props) => props.theme.textColor};
    font-size: 1.3rem;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.btnHover};
    }

    &:active {
        background-color: ${(props) => props.theme.blueDark};
    }

    &.loading-true {
        background-color: ${(props) => props.theme.blueDark};
        b {
            display: none;
        }
        i {
            display: inline-block;
        }
    }
`;

const Spinner = styled.i`
    width: 20px;
    height: 20px;
    background-image: url(${SpinnerImage});
    background-position: -140px 0;

    display: none;

    animation: keyframes-loading 0.8s steps(21) infinite;

    @keyframes keyframes-loading {
        0% {
            background-position: 0;
        }
        100% {
            background-position: -420px;
        }
    }
`;

const LoginForm = (props) => {
    const user = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(true);
    };

    return (
        <Form action={`${process.env.REACT_APP_DOMAIN}:5000/oauth/battlenet`}>
            <Select>
                <label htmlFor="region">Region: </label>
                <select
                    name="region"
                    id="region"
                    value={user.region}
                    onChange={props.regionHandler}
                    required
                >
                    <option value="us">North America</option>
                    <option value="eu">Europe</option>
                    <option value="kr">Korea</option>
                    <option value="tw">Taiwan</option>
                    <option value="cn">China</option>
                </select>
            </Select>

            <Select>
                <label htmlFor="locale">Language: </label>
                <select
                    name="locale"
                    id="locale"
                    value={user.locale}
                    onChange={props.localeHandler}
                    required
                >
                    <option value="en_US">English (US)</option>
                    <option value="es_MX">Mexican Spanish</option>
                    <option value="pt_BR">Portuguese</option>
                    <option value="en_GB">English (GB)</option>
                    <option value="es_ES">European Spanish</option>
                    <option value="fr_FR">French</option>
                    <option value="ru_RU">Russian</option>
                    <option value="de_DE">German</option>
                    <option value="pt_PT">Portuguese</option>
                    <option value="it_IT">Italian</option>
                    <option value="ko_KR">Korean</option>
                    <option value="zh_TW">Mandarin</option>
                    <option value="zh_CN">Chinese</option>
                </select>
            </Select>

            <Button
                // onClick={handleLoading}
                type="submit"
                value="Submit"
                className={"loading-" + loading.toString()}
            >
                <b>Login</b>
                <Spinner></Spinner>
            </Button>
        </Form>
    );
};

export default LoginForm;
