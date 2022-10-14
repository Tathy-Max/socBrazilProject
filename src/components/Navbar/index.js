import Logo from '../../assets/socLogo.png';
import style from '../Navbar/styles.module.css';

export function Navbar() {
	return (
		<div className={style.navbarDiv}>
			<img src={Logo} alt="logoSoc" />
			<p>Home</p>
			<p>Speakers</p>
			<p>Mediators</p>
			<p>Agenda</p>
		</div>
	);
}
