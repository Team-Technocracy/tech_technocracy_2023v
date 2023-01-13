import Home from './Home/Home';
import Navbar from './Home/Navbar-new/Navbar';
// import Journey from './components/Journey/Timeline';
import Sponsors from './Sponsors/Spons';
import Team from './Team/team';
import Footer from './Footer/NFooter';

function HomePage () {
    return (
        <>
        <Home/>
        {/* <Journey/> */}
        <Sponsors/>
        <Team/>
        </>
    )
}
export default HomePage;