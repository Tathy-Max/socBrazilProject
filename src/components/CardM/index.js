import style from '../CardM/styles.module.css';

export function CardM({ speakers }) {
	// console.log(speakers);

	return (
		<div className={style.cardSDiv}>
			<h2>{speakers.day}</h2>
			<img src={`${speakers.imageS}`} alt="speakers logo" />
			<h3>{speakers.name}</h3>
			<p>{speakers.topicS}</p>
			<a href={speakers.link} target="_blank" rel="noreferrer">
				<img id={style.imgC} src={speakers.imageC} alt="speakers logo" />
			</a>
			<p>{speakers.topicC}</p>
		</div>
	);
}
