import style from '../BioS/styles.module.css';
import { useState } from 'react';

export function BioS({ speakers }) {
	const [bio] = useState(speakers);
	return (
		<div className={style.bioContainerDiv} id="convidados">
			<div className={style.h2Div}>
				<h2>Convidados</h2>
			</div>
			<>
				<div className={style.cardsSDiv}>
					{bio
						.filter((speakersF) => {
							return speakersF.aboutS !== 'nao';
						})
						.map((speakersF) => {
							return (
								<>
									<div className={style.bioSDiv}>
										<img src={`${speakersF.imageS}`} alt="speakers logo" />
										<h4>{speakersF.name}</h4>
										<p>{speakersF.aboutS}</p>
									</div>
								</>
							);
						})}
				</div>
			</>
		</div>
	);
}
