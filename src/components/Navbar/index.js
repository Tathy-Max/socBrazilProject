import Logo from '../../assets/logoSocNav.png';
import style from '../Navbar/styles.module.css';

export function Navbar() {
	return (
		<div className={style.navbarDiv}>
			<img src={Logo} alt="logoSoc" />
			<p>Convidados</p>
			<p>Anfitrioes</p>
			<p>Agenda</p>
		</div>
	);
}
