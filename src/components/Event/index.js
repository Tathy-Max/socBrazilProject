import style from '../Event/styles.module.css';
import LogoEvent from '../../assets/socbrazillogoevent.png';
import Sans from '../../assets/zup.png';
import DataSec from '../../assets/zup.png';
import SocCloud from '../../assets/zup.png';
import Zup from '../../assets/zup.png';

export function Event() {
	return (
		<>
			<div className={style.eventDiv}>
				<div className={style.infoLogoDiv}>
					<div className={style.infoDiv}>
						<br></br>
						<h1>De 5/12 a 09/12 </h1>
						<br></br>
						<h2>Convidados especiais e paineis ao vivo</h2>
						<br></br>
						<h3>Traducao simultanea</h3>
						<h3>
							Evento online e gratuito <br></br> Vagas limitadas
						</h3>
					</div>
					<div className={style.logoDiv}>
						<img src={LogoEvent} alt="logo Event" />
					</div>
				</div>
			</div>
			<div className={style.sponsorsDiv}>
				<p>Apoio:</p>
				<img src={Sans} alt="logo Sans" />
				<img src={DataSec} alt="logo Data" />
				<img src={SocCloud} alt="logo Soc" />
				<img src={Zup} alt="logo Soc" />
				<button className={style.subscribeButton}>Inscreva-se Ja!</button>
			</div>
		</>
	);
}
