import Navbar from './components/Navbar.jsx'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
