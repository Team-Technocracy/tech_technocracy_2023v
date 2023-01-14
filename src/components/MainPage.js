import Home from './Home/Home';
import Navbar from './Home/Navbar-new/Navbar';
import Journey from './Journey/index';
import Sponsors from './Sponsors/Spons';
import Team from './Team/team';


function HomePage () {
    return (
        <>
         <Navbar/>
        <Home/>
        <Journey/>
        <Sponsors/>
        <Team/>
        </>
    )
}
export default HomePage;