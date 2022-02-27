import './App.css';
import Header from './components/header.jsx';
import Features from './components/features';
import Carousel from './components/clientCarousel';
import Footer from './components/footer';


function App() {


	return (
		<div>
			<Header></Header>
			<Carousel></Carousel>
			<Features></Features>
			<Footer></Footer>
		</div>
	);
}

export default App;
