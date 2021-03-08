import React from "react";
import Carousel from "../../components/Carousel";

import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

afterEach(cleanup);

const firstImage =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png";
const secondImage =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png";
const images = [firstImage, secondImage];

it("matches snapshot", () => {
  const tree = renderer.create(<Carousel images={images} />);
  expect(tree).toMatchSnapshot();
});

it("should not render arrow left button on the first image", () => {
  const wrapper = shallow(<Carousel images={images} />);
  expect(wrapper.find(".arrowLeftButton").length).toBe(0);
  expect(wrapper.find(".arrowRightButton").length).toBe(1);
});

it("should not render arrow right button on the last image", () => {
  const wrapper = shallow(<Carousel images={images} />);
  const arrowRightButton = wrapper.find(".arrowRightButton");
  for (let i = 0; i < images.length - 1; i++) {
    arrowRightButton.simulate("click");
  }
  expect(wrapper.find(".arrowLeftButton").length).toBe(1);
  expect(wrapper.find(".arrowRightButton").length).toBe(0);
});

it("should render the first image", () => {
  const wrapper = shallow(<Carousel images={images} />);
  expect(wrapper.find(".currentImage").prop("src")).toBe(firstImage);
});

it("should render the second image when the arrow right button is clicked", () => {
  const wrapper = shallow(<Carousel images={images} />);
  const arrowRightButton = wrapper.find(".arrowRightButton");
  arrowRightButton.simulate("click");
  expect(wrapper.find(".currentImage").prop("src")).toBe(secondImage);
});

it("should render arrow left button when arrow right button is clicked", () => {
  const wrapper = shallow(<Carousel images={images} />);
  const arrowRightButton = wrapper.find(".arrowRightButton");
  arrowRightButton.simulate("click");
  expect(wrapper.find(".arrowLeftButton").length).toBe(1);
});
