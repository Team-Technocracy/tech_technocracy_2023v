
// import Home from './components/Home/Home';
// import Navbar from './components/Home/Navbar-new/Navbar';
// import Journey from './components/Journey/Timeline';
// import Sponsors from './components/Sponsors/Spons';
// import Team from './components/Team/team';
import Footer from './components/Footer/NFooter';
import HomePage from './components/MainPage';
import Aavartan from './components/AavartanNew';
// import TechTeam from './components/Team/TechTeam/techteamsec';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from 'react-scroll-to-top';
import ScrollUp from './components/ScrollUp';
import SideNav from './components/Sidenav/SideNav';
import TechTeamSec from './components/Team/TechTeam/techteamsec';




const App = () => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		updatePredicate();
		window.addEventListener('resize', updatePredicate);

		return function cleanup() {
			window.removeEventListener('resize', updatePredicate);
		};
	}, []);

	const updatePredicate = () => {
		setIsDesktop(window.innerWidth > 768);
	};

	return (
		<div>

			{/* <Home/> */}
			{/* <Journey/> */}
			{/* <Aavartan/> */}
			{/* <Sponsors/> */}
			{/* <Team/> */}


			<BrowserRouter>
				{/* <Navbar/> */}
				<SideNav />
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					{/* </Routes> */}
					{/* <Routes> */}
					<Route exact path='/aavartan' element={<Aavartan />} />
					<Route exact path='/tech-team' element={<TechTeamSec />} />
					{/* <Route exact path='/techteam' element={<TechTeam/>} /> */}
				</Routes>
				<Helmet>
					<title>Technocracy | NIT Raipur</title>
					<meta name='description' content='Technocracy official NIT Raipur' />
					<meta
						name='keywords'
						content='technocracy,tc,raipur,nit,nit raipur,aavartan,tech,tech-fest,chhattisgarh,cg'
					/>
				</Helmet>
			</BrowserRouter>

			<Footer />
			<ScrollToTop
				smooth
				style={{
					borderRadius: '100%',
					zIndex: 100000,
					width: isDesktop ? '40px' : '70px',
					height: isDesktop ? '40px' : '70px',
					bottom: "55px",
				}}
				component={<ScrollUp />}
			/>
		</div>
	);
};


export default App;
