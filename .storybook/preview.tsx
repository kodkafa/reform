import '../src/tailwind.css';
// import '../src/styles/preline/preline.scss';
// import '../src/styles/tailwind/tailwind.scss';
import '../src/styles/reform/reform.scss';
//
// export const parameters = {
//   backgrounds: {
//     default: 'light',
//   },
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import { DEFAULT_THEME, withTailwindTheme } from './withTailwindTheme.decorator';

export const parameters = {
  // backgrounds: {
  //   default: 'light',
  // },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators = [withTailwindTheme];
