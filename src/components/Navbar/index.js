import Logo from '../../assets/logoSocNav.png';
import style from '../Navbar/styles.module.css';
import { Link } from 'react-scroll';

export function Navbar() {
	return (
		<div className={style.navbarDiv}>
			<img src={Logo} alt="logoSoc" />
			<Link to="agenda" smooth={true} duration={500} offset={-100}>
				<p>Agenda</p>
			</Link>
			<Link to="anfitrioes" smooth={true} duration={500} offset={-130}>
				<p>Anfitriões</p>
			</Link>
			<Link to="convidados" smooth={true} duration={500} offset={-75}>
				<p>Convidados</p>
			</Link>
			<Link to="contato" smooth={true} duration={500}>
				<p>Contatos</p>
			</Link>
		</div>
	);
}
