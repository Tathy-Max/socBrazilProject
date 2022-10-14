import { Navbar } from './components/Navbar';
import { Event } from './components/Event';
import { CardM } from './components/CardM';
import speakers from './speakers.json';
import { useState } from 'react';
import './index.css';
import InfoLogo from './assets/infoLogo.png';
import InfoText from './assets/infoText.png';

function App() {
	const [allSpeakers, setAllSpeakers] = useState(speakers);
	return (
		<>
			<Navbar />
			<Event />
			<div id="id" className="cardDiv">
				{allSpeakers.map((speakers) => {
					return <CardM speakers={speakers} />;
				})}
			</div>
			<div className="infoDiv">
				<img src={InfoText} alt="info logo" />
				<img src={InfoLogo} width="400px" alt="info logo" />
			</div>
		</>
	);
}

export default App;
