import { Navbar } from './components/Navbar';
import { Event } from './components/Event';
import { CardM } from './components/CardM';
import { Info } from './components/Info';
import { Mediators } from './components/Mediators';
import { Footer } from './components/Footer';

import speakers from './speakers.json';
import { useState } from 'react';
import './index.css';

function App() {
	const [allSpeakers, setAllSpeakers] = useState(speakers);

	return (
		<>
			<Navbar />
			<Event />
			<Info />
			<div id="agenda" className="cardDiv">
				{allSpeakers.map((speakers) => {
					return <CardM speakers={speakers} />;
				})}
			</div>
			<Mediators />
			<Footer />
		</>
	);
}

export default App;
