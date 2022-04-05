import React from 'react';
import Articles from '../../components/articles/Articles';
import Hero from '../../components/hero/Hero';
import Info from '../../components/information/Info';
import { HomeContainer } from './Home.style';

const Home = () => {
	return (
		<div>
			<HomeContainer>
				<Hero />
				<Info />
				<Articles />
			</HomeContainer>
		</div>
	);
};

export default Home;
