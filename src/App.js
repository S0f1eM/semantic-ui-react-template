import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomepageLayout from './components/sections/HomePageLayout';

import Article from './components/sections/Article';
import Footer from './components/Footer';

import './App.css';

const App = () => {
	return (

	<BrowserRouter>
			<Route path="/" exact component={HomepageLayout} />
			<Route path="/Home" exact component={HomepageLayout} />
    		<Route path="/Article" exact component={Article} />
	 	<Footer />
	</BrowserRouter>
	)
}

export default App;

