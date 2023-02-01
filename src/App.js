
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
import TechTeamSec from './components/Team/TechTeam/TechTeamMain';
import Acko from './components/utils/Acko';
import Event from './components/Aavartan_Components/Event'
// import Register from './components/Forms/Registration/Registration';
import EventPage from './components/EventPage';
import Registration from './components/Forms/Registration/Code Tag/CodeTag';
import BlindCode from './components/Forms/Registration/Blind Code/BlindCode';
import Bow from './components/Forms/Registration/BOW/Bow';
import Gizmosky from './components/Forms/Registration/Gizmosky/Gizmosky';
import Shipwreck from './components/Forms/Registration/Shipwreck/Shipwreck';
import ScavengerHunt from './components/Forms/Registration/Scavenger hunt/ScavengerHunt';
import TreasureHunt from './components/Forms/Registration/Treasure hunt/TreasureHunt';


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
					<Route exact path='/events' element={<EventPage/>}/>
					<Route exact path='/tech-team' element={<TechTeamSec />} />
					<Route exact path='/register/blindcoding' element={<BlindCode />} />
					<Route exact path='/register/bestoutofwaste' element={<Bow />} />
					<Route exact path='/register/codetag' element={<Registration />} />
					<Route exact path='/register/hydrolift' element={<Gizmosky />} />
					<Route exact path='/register/shipwreck' element={<Shipwreck />} />
					<Route exact path='/register/scavengerhunt' element={<ScavengerHunt />} />
					<Route exact path='/register/treasurehunt' element={<TreasureHunt />} />
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
			

			<Footer />
			<Acko />
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
			</BrowserRouter>
		</div>
	);
};


export default App;
