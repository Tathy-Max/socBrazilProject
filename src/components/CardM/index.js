import style from '../CardM/styles.module.css';
import '../../speakers.json';

export function CardM({ speakers }) {
	// console.log(speakers);

	return (
		<div className={style.cardSDiv}>
			<h1>{speakers.day}</h1>
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
