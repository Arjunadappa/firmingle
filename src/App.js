import './App.css';
import Header from './components/header.jsx';
import Features from './components/features';
import Carousel from './components/clientCarousel';
function App() {
	return (
		<div>
			<Header></Header>
			<Carousel></Carousel>
			<Features></Features>
		</div>
	);
}

export default App;
