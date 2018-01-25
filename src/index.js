import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import reducers from './reducers/index';

const store = composeWithDevTools(applyMiddleware(thunk))(createStore)(reducers);

if (localStorage.getItem('token')) {
	// fix this
	// store.dispatch({ type: 'AUTH_USER' });
	store.dispatch({ type: 'DE_AUTH_USER' });
}

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container'));
