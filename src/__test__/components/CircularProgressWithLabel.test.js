import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";

configure({ adapter: new Adapter() });

it("should render a graphic with a label and porcentage", () => {
  const value = 90;
  const label = "HP";
  const maxSize = "100px";
  const wrapper = shallow(
    <CircularProgressWithLabel value={value} maxSize={maxSize} label={label} />
  );
  expect(wrapper.find(".label").text()).toBe(label);
  expect(wrapper.find(".circularProgress").prop("value")).toBe(value);
  expect(wrapper.find(".circularProgress").prop("text")).toBe(`${value}%`);
});
