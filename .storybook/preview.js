import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import '../src/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'blue', value: '#4C70EE' },
      { name: 'navy', value: '#172366' },
      { name: 'red', value: '#FF6854' },
      { name: 'yellow', value: '#FFC940' },
      { name: 'grey1', value: '#888888' },
      { name: 'grey2', value: '#D9D9D9' },
      { name: 'grey3', value: '#FAFAFA' },
    ],
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </Provider>
  ),
];
