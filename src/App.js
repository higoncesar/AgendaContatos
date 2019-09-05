import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import './config/ReactotronConfig';

import store from './store';

import Main from './pages/Main';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Main />
    </Provider>
  );
}

export default App;
