import style from '../BioS/styles.module.css';
import { useState } from 'react';

export function BioS({ speakers }) {
	const [bio] = useState(speakers);
	return (
		<div className={style.bioContainerDiv} id="convidados">
			<>
				{bio.map((speakers) => {
					return (
						<>
							<div className={style.bioSDiv}>
								<img src={`${speakers.imageS}`} alt="speakers logo" />
								{/* <h4>{speakers.name}</h4> */}
								<p>{speakers.aboutS}</p>
							</div>
						</>
					);
				})}
			</>
		</div>
	);
}
