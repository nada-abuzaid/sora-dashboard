import React from "react";
import DashHeader from "../pages-components/Dashboard/DashHeader";
import PropTypes from "prop-types";

export default {
  title: "Components/Dashboard/DashHeader",
  component: DashHeader,
};

const Template = (args) => <DashHeader {...args} />;

export const HeaderDash = Template.bind({});

HeaderDash.propTypes = {
  /**
   * If the sidebar is open or not
   */
  isOpen: PropTypes.bool,
  /**
   * Set the sidebar state
   */
  setisOpen: PropTypes.bool,
};
