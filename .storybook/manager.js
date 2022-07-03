import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",

  appBorderRadius: 4,

  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  colorSecondary: "#73314F",

  barTextColor: "silver",
  barSelectedColor: "#73314F",

  brandTitle: "Syrona Health",
  brandUrl: "https://example.com",
  brandImage: "https://svgshare.com/i/im7.svg",
  brandTarget: "_self",
});

addons.setConfig({
  theme,
});
