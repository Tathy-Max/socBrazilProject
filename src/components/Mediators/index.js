import './styles.modules.css';
import IvanLogo from '../../assets/ivan.jpeg';
import BrunoLogo from '../../assets/bruno.jpeg';

export function Mediators() {
	return (
		<>
			<div className="faixaDiv">
				<h2>Anfitriões</h2>
			</div>
			<div className="moderDiv">
				<div className="moderInfoDiv">
					<img src={BrunoLogo} alt="logo bruno"></img>
					<h4>Bruno Guerreiro</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
						sunt quidem aliquam cupiditate.
					</p>
				</div>
				<div className="moderInfoDiv">
					<img src={IvanLogo} alt="logo ivan"></img>
					<h4>Ivan Salles</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
						sunt quidem aliquam cupiditate.
					</p>
				</div>
				<div className="moderInfoDiv">
					<img src={IvanLogo} alt="logo kramer"></img>
					<h4>Kramer Saunders</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
						sunt quidem aliquam cupiditate.
					</p>
				</div>
				<div className="moderInfoDiv">
					<img src={IvanLogo} alt="logo luccas"></img>
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
