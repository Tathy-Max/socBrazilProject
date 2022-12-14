import style from './styles.module.css';
import Youtube from '../../assets/youtube.png';
import Telegram from '../../assets/telegram.png';
import Linkedin from '../../assets/linkedin.png';

export function Footer() {
	return (
		<>
			<div className={style.btDiv}>
				<h3>Não perca essa chance!</h3>
				<a
					id="btnSubscribe"
					href="https://docs.google.com/forms/d/e/1FAIpQLSdsC4NWKvPh0_9WFqJrZEJBVSw9UwqScndiqCkfmqPuwF57Ng/viewform"
					target="_blank"
					rel="noreferrer"
				>
					<button className={style.subscribeButton}>Inscreva-se Já!</button>
				</a>
			</div>
			<div className={style.contatoDiv} id="contato">
				<h3>Conecte-se com o SOC Brazil</h3>
				<div className={style.socialDiv}>
					<a
						href="https://www.linkedin.com/company/socbrazil/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Linkedin} alt="logo linkedin" />
					</a>
					<p>LinkedIn</p>
				</div>
				<div className={style.socialDiv}>
					<a
						href="https://youtube.com/c/SOCBrazil"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Youtube} alt="logo youtube" />
					</a>
					<p>YouTube</p>
				</div>
				<div className={style.socialDiv}>
					<a
						href="https://youtube.com/c/SOCBrazil"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Telegram} alt="logo telegram" />
					</a>
					<p>Telegram</p>
				</div>
			</div>
		</>
	);
}
