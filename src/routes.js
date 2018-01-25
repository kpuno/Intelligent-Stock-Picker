import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import RequireAuth from './hocs/requireAuth';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import HomePage from './containers/HomePage';
import Dashboard from './containers//dashboard/Dashboard';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="signup" component={SignUp} />
			<Route path="signin" component={SignIn} />
			<Route path="dashboard" component={RequireAuth(Dashboard)}/>
		</Route>
	</Router>
);
