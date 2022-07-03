import React from "react";
import Sidebar from "../pages-components/Dashboard/Sidebar";

export default {
  title: "Components/Dashboard/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const SidebarDash = Template.bind({});
