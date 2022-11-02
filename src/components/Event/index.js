import style from '../Event/styles.module.css';
import LogoEvent from '../../assets/vitrine.png';
import Sans from '../../assets/sans.png';
import DataSec from '../../assets/logoDataSec.png';
import SocCloud from '../../assets/logoSocCloud.png';
import Zup from '../../assets/zup.png';

export function Event() {
	return (
		<>
			<div className={style.eventContainer}>
				<div className={style.eventDiv}>
					<img src={LogoEvent} alt="logo Event" />
				</div>
				<div className={style.sponsorsDiv}>
					<p>Apoio:</p>
					<img src={Sans} className={style.sansId} alt="logo Sans" />
					<img src={DataSec} className={style.dataId} alt="logo Data" />
					<img src={SocCloud} className={style.socId} alt="logo Soc" />
					<img src={Zup} className={style.zupId} alt="logo Soc" />

					<a
						id="btnSubscribe"
						href="https://www.sympla.com.br/evento-online/soc-brazil-week-2022/1735097"
						target="_blank"
						rel="noreferrer"
					>
						<button className={style.subscribeButton}>Inscreva-se Já!</button>
					</a>
				</div>
			</div>
		</>
	);
}
