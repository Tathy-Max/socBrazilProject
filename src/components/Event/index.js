import style from '../Event/styles.module.css';
import LogoEvent from '../../assets/logoEvento.jpeg';
import Sans from '../../assets/angelo-avatar.png';
import DataSec from '../../assets/tathy-avatar.png';
import SocCloud from '../../assets/tathy-avatar.png';

export function Event() {
	return (
		<div className={style.eventDiv}>
			<img src={LogoEvent} alt="logo Event" />
			<div className={style.sponsorsDiv}>
				<img src={Sans} alt="logo Sans" />
				<img src={DataSec} alt="logo Data" />
				<img src={SocCloud} alt="logo Soc" />
				<button>Incricao</button>
			</div>
		</div>
	);
}
