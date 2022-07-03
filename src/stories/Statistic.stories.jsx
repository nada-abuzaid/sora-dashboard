import React from "react";
import Statistic from "../pages-components/Dashboard/StatisticNumbers/Statistic";

export default {
  title: "Components/Dashboard/Statictics/Statistic",
  component: Statistic,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Statistic {...args} />;

export const Statistiic = Template.bind({});

Statistiic.args = {
  title: "Total",
  number: 123,
};

Statistiic.argTypes = {
  number: { control: "number" },
  title: { control: "string" },
};
