import style from '../CardM/styles.module.css';

export function CardM({ speakers }) {
	console.log(speakers);

	return (
		<div className={style.cardMDivContainer}>
			<div className={style.cardMDivCards}>
				<div className={style.cardMDiv}>
					<img src={speakers.image} width={100} alt="speakersLogo" />
					<h2>{speakers.name}</h2>
					<p>{speakers.bio}</p>
				</div>
			</div>
		</div>
	);
}
