import React from 'react';
import {render} from 'react-dom';
import App from 'components/App';
import store from './core/store'

import 'css/main.css';

import { Provider } from 'shasta';

const Root = (props) => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root/>, document.querySelector('#app'));
