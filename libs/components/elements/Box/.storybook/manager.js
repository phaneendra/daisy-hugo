import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";

addons.setConfig({
  isFullscreen: false,
  showAddonsPanel: true,
  panelPosition: "right",
  theme: create({
    base: "light",
    brandTitle: "Academic Next - Box",
    brandUrl: "https://github.com/phaneendra/academic-next"
  })
});
