
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar-new/Navbar';
import Journey from './components/Journey/Timeline';
import Sponsors from './components/Sponsors/Spons';
import Team from './components/Team/team'
import React, { useEffect, useState } from 'react';



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
      {/* <Navbar/> */}
      <Home/>
      <Journey/>
      <Sponsors/>
      <Team/>
    </div>
    );
  };
  

export default App;
