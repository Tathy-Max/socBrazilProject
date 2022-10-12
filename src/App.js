import { Navbar } from './components/Navbar';
import { Event } from './components/Event';
import { CardM } from './components/CardM';
import speakers from './speakers.json';
import { useState } from 'react';
import style from './index.css';

function App() {
	const [allSpeakers, setAllSpeakers] = useState(speakers);
	return (
		<>
			<Navbar />
			<Event />
			<div id="id" className={style.cardMDiv}>
				{allSpeakers.map((speakers) => {
					return (
						<div>
							<CardM speakers={speakers} />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
