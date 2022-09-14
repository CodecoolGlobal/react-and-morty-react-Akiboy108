import React from "react";
import { render, waitForElement, within } from "@testing-library/react";
import App from "./App";
import Characters from "./Components/Characters/Characters";
import Locations from "./Components/Locations/locations";
import userEvent from "@testing-library/user-event";

class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

test("page loads successfully", () => {
  render(<App />);
  const container = document.querySelector(".App");
  expect(container).toBeInTheDocument();
});

test("check whether more information shows up from the character, when we click on a character in the list", async () => {
  render(<Characters />);
  const container = await waitForElement(() =>
    document.querySelector(".characterLeft.pointer")
  );
  const button = within(container).getByText("Rick Sanchez");

  userEvent.click(button);
  const charDisp = await waitForElement(() =>
    document.querySelector(".Characterdisplay")
  );
  const episodesContainer = document.querySelector(
    ".Characterdisplay__episodes"
  );
  const amount = episodesContainer.children.length;
  const image = document.querySelector(".Characterdisplay__image");

  expect(within(charDisp).getByText("Rick Sanchez")).toBeInTheDocument();
  expect(image).toHaveAttribute(
    "src",
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  );
  expect(within(charDisp).getByText("Gender: ♂️ Male")).toBeInTheDocument();
  expect(within(charDisp).getByText("Species: 🧍 Human")).toBeInTheDocument();
  expect(
    within(charDisp).getByText("Location: Citadel of Ricks")
  ).toBeInTheDocument();
  expect(
    within(charDisp).getByText("Origin: 🌎 Earth (C-137)")
  ).toBeInTheDocument();
  expect(within(charDisp).getByText("Status: ❤️ Alive")).toBeInTheDocument();
  expect(amount).toEqual(51);
});

test(" check whether more infomration shows up from the location, when we click on a location in the list", async () => {
  const wrapper = render(<Locations />);
  const button = await wrapper.findByText("Abadango");

  userEvent.click(button);
  const locDisp = await waitForElement(() =>
    document.querySelector(".Locationdisplay")
  );
  const residents = document.querySelector(".Locationdisplay__residents.extra");
  const amount = residents.children.length;

  expect(within(locDisp).getByText("Abadango")).toBeInTheDocument();
  expect(within(locDisp).getByText("Cluster")).toBeInTheDocument();
  expect(within(locDisp).getByText("unknown")).toBeInTheDocument();
  expect(
    within(locDisp).getByText("2017-11-10T13:06:38.182Z")
  ).toBeInTheDocument();
  expect(
    within(locDisp).getByText("https://rickandmortyapi.com/api/location/2")
  ).toBeInTheDocument();
  expect(amount).toEqual(1);
});
