import { Navbar } from './components/Navbar';
import { Event } from './components/Event';
import { CardM } from './components/CardM';
import { Info } from './components/Info';
import { Mediators } from './components/Mediators';
import { BioS } from './components/BioS';
import { Footer } from './components/Footer';
// import { BackToTopButton } from './components/BackToTopButton';

import speakers from './speakers.json';
import { useState } from 'react';
import './app.css';

function App() {
	const [allSpeakers] = useState(speakers);

	return (
		<>
			<Navbar />
			<Event />
			<Info />

			<h2 className="h2Agenda">Agenda</h2>
			<div id="agenda" className="cardDiv">
				{allSpeakers.map((speakers) => {
					return (
						<>
							<CardM speakers={speakers} />
						</>
					);
				})}
			</div>
			<Mediators />
			<BioS speakers={speakers} />
			<Footer />
		</>
	);
}

export default App;
