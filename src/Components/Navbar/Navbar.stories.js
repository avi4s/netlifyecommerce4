// src/stories/Navbar.stories.js
import React from "react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../../Redux/Store";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    variant: { control: "text" },
    label: { control: "text" },
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => (
  <Provider store={store}>
    <Navbar {...args} />
  </Provider>
);

export const Nav = Template.bind({});
Nav.args = {
  variant: "Ecommerce",
  label: "Ecommerce",
  backgroundColor: "#1f2d3d",
};
