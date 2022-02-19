import React from "react";
import Footer from "../components/Footer";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import App from "../App";
import useFetch from "../hooks/useFetch";
import WowCharacters from "../components/Characters/WowCharacters";
import WowCharacter from "../components/Characters/WowCharacter";
import WowCharacterImage from "../components/Characters/WowCharacterImage";
import Image from "../components/Characters/Image";

jest.mock("../hooks/useFetch");
jest.mock("../components/Characters/WowCharacters");
jest.mock("../components/Characters/WowCharacter");
jest.mock("../components/Characters/WowCharacterImage");
jest.mock("../components/Characters/Image");

let data = {};

beforeAll(() => {
    data = { test: "data" };
});

afterAll(() => {
    data = {};
});

test("App renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});

test("Checks for Battle.net text in App", () => {
    render(<App />);
    expect(screen.getByText("Battle.net API")).toBeInTheDocument();
});

test("Footer renders correctly", () => {
    render(<Footer />);
    expect(screen.getByText("Rob Fraser")).toBeInTheDocument();
});

describe('WoW Characters', () => {
    test("Characters render with correct data", () => {
        const tree = renderer.create(<WowCharacters />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("Character render with correct data", () => {
        const tree = renderer.create(<WowCharacter />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("CharacterImage render with correct data", () => {
        const tree = renderer.create(<WowCharacterImage />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("Image render with correct data", () => {
        const tree = renderer.create(<Image />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})