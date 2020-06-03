import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { addParameters } from "@storybook/client-api";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  }
});
addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff' },
    { name: "light", value: "#eeeeee", default: "true" },
    { name: 'gray', value: '#cccccc' },
    { name: 'dark', value: '#222222' },
    { name: 'black', value: '#000000' },
  ],
  grid: { cellSize: 8 }
});