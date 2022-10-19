import './styles.modules.css';
import IvanLogo from '../../assets/ivan.jpeg';
import BrunoLogo from '../../assets/bruno.jpeg';
import Luccas from '../../assets/luccas.jfif';
import Kramer from '../../assets/kramer.jfif';

export function Mediators() {
	return (
		<>
			<div className="faixaDiv">
				<h2>Anfitriões</h2>
			</div>
			<div className="moderDiv" id="anfitrioes">
				<div className="moderInfoDiv">
					<a
						href="https://www.linkedin.com/in/brunogdiniz/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={BrunoLogo} alt="logo bruno"></img>
					</a>
					<h4>Bruno Guerreiro</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
						sunt quidem aliquam cupiditate.
					</p>
				</div>
				<div className="moderInfoDiv">
					<a
						href="https://www.linkedin.com/in/ivansalles/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={IvanLogo} alt="logo ivan"></img>
					</a>
					<h4>Ivan Salles</h4>
					<p>
						Colabora em comunidades como o Mente Binária e o SOC Brazil e
						publica sobre cyber no IN. É Diretor de Iniciativas Estratégicas de
						SOC na Trend Micro - CA.
					</p>
				</div>
				<div className="moderInfoDiv">
					<a
						href="https://www.linkedin.com/in/kramer-saunders-16988663/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Kramer} alt="logo kramer"></img>
					</a>
					<h4>Kramer Saunders</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
						sunt quidem aliquam cupiditate.
					</p>
				</div>
				<div className="moderInfoDiv">
					<a
						href="https://www.linkedin.com/in/luccasbertti/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Luccas} alt="logo luccas"></img>
					</a>
					<h4>Luccas Bertti</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
						sunt quidem aliquam cupiditate.
					</p>
				</div>
			</div>
		</>
	);
}
