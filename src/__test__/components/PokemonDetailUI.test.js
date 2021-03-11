import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PokemonDetailUI from "../../components/PokemonDetailUI";
import PokemonInfoMock from "../mocks/PokemonInfoMock";

configure({ adapter: new Adapter() });

it("should render a message NOT FOUND with incorrect pokemonID", () => {
  const wrapper = shallow(<PokemonDetailUI />);
  expect(wrapper.find(".notFound").text()).toBe("NOT FOUND");
});

it("should not render NOT FOUND with correct pokemonID", () => {
  const pokemonInfo = PokemonInfoMock();
  const wrapper = shallow(<PokemonDetailUI pokemonInfo={pokemonInfo} />);
  expect(wrapper.find(".notFound").exists()).toBeFalsy();
});
