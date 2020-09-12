import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ThemeProvider} from '@material-ui/styles';

//redux
import {Provider} from 'react-redux';
import store from './store';
// import {loadUser} from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import Routes from './Routes';

const browserHistory = createBrowserHistory ();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter history={browserHistory}>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
      
  );
};


export default App;
