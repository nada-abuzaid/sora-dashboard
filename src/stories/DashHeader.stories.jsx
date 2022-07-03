import React from "react";
import DashHeader from "../pages-components/Dashboard/DashHeader";

export default {
  title: "Components/Dashboard/DashHeader",
  component: DashHeader,
};

const Template = (args) => <DashHeader {...args} />;

export const HeaderDash = Template.bind({});
