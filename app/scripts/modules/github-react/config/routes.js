import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/main.js';
import Home from '../components/home.js';
import Profile from '../components/profile.js';

export default (
	<Route path="/" component={Main}>
		<Route path="profile/:username" component={Profile} />
		<IndexRoute component={Home} />
	</Route>
);
