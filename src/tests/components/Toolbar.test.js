import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

configure({adapter: new Adapter()});

let wrapper = null;

describe("Toolbar", () => {
  beforeEach(() => {
    wrapper = shallow(<Toolbar/>);
  });

  it("should render 3 Nav components", () => {
    expect(wrapper.find(Nav)).toHaveLength(3);
  });

  it("should render a navbar header", () => {
    expect(wrapper.find(Navbar.Header)).toHaveLength(1);
  });

  it("should render 3 LinkContainer components", () => {
    expect(wrapper.find(LinkContainer)).toHaveLength(3);
  });
});