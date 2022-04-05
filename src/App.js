import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Router>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
