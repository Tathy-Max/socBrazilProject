import style from '../BioS/styles.module.css';
import { useState } from 'react';

export function BioS({ speakers }) {
	const [bio] = useState(speakers);
	return (
		<div className={style.bioContainerDiv} id="convidados">
			<>
				{bio
					.filter((speakersF) => {
						return speakersF.aboutS !== 'nao';
					})
					.map((speakersF) => {
						return (
							<>
								<div className={style.bioSDiv}>
									<img src={`${speakersF.imageS}`} alt="speakers logo" />
									{/* <h4>{speakers.name}</h4> */}
									<p>{speakersF.aboutS}</p>
								</div>
							</>
						);
					})}
			</>
		</div>
	);
}
