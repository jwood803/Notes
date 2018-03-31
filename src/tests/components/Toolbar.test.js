import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import {Nav} from "react-bootstrap";

configure({adapter: new Adapter()});

describe("Toolbar", () => {
  it("should render 3 Nav components", () => {
    const wrapper = shallow(<Toolbar/>);

    expect(wrapper.find(Nav)).toHaveLength(3);
  });
});