import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.svg';

function App() {
	return (
		<div className="App">
			<div className='freecodecamp-logo-contenedor'>	
				<img src={freeCodeCampLogo}
				className='freecodecamp-logo'
				alt='Logode freCodeCamp' />
			</div>
			<div className='contenedor-calculadora'>
			</div>
		</div>
	)
}

export default App;
