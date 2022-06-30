import React from "react";
import { Header } from "../components/Header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = () => <Header />;

export const AuthHeader = Template.bind({});
