import style from '../Event/styles.module.css';
import LogoEvent from '../../assets/vitrine.jpeg';
import Sans from '../../assets/logoSans.png';
import DataSec from '../../assets/zup.png';
import SocCloud from '../../assets/zup.png';
import Zup from '../../assets/zup.png';

export function Event() {
	return (
		<>
			<div className={style.eventDiv}>
				<img src={LogoEvent} alt="logo Event" />
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
