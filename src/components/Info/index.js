import InfoLogo from '../../assets/SOC HERO IMAGE.png';
import style from './styles.module.css';

export function Info() {
	return (
		<div className={style.infoDiv}>
			<img src={InfoLogo} width="400px" alt="info logo" />
			<div className={style.infoText}>
				<h2>Venha para o evento mais foda dos ultimos anos.</h2>
				<br></br>
				<h4>
					bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbmmmmbbb<br></br>
					bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br></br>
					bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br></br>
					bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br></br>
					bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br></br>
					bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br></br>
				</h4>
			</div>
		</div>
	);
}
