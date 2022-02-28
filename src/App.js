import './App.css';
import Header from './components/header.jsx';
import Features from './components/features';
import Carousel from './components/clientCarousel';
import Footer from './components/footer';
import Info from './components/info';
import Testimonials from './components/testimonials';
function App() {


	return (
		<div>
			<Header></Header>
			<Carousel></Carousel>
			<Features></Features>
			<Info></Info>
			<Testimonials></Testimonials>
			<Footer></Footer>
		</div>
	);
}

export default App;
