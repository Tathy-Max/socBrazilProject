import InfoLogo from '../../assets/SOC HERO IMAGE.png';
import style from './styles.module.css';

export function Info() {
	return (
		<div className={style.infoDiv}>
			<img src={InfoLogo} width="400px" alt="info logo" />
			<div className={style.infoText}>
				<h2>Junte-se a nós no evento de SecOps do ano!</h2>
				<br></br>
				<h4>
					SOC Brazil Week 2022 é uma oportunidade única de reunir alguns dos
					principais<br></br> atores da comunidade global de SecOps à
					especialistas locais em uma semana inteira <br></br>de palestras e
					painéis onde discutiremos números, tendências e melhores práticas
					<br></br> em todo o mundo. Não perca também nosso momento Comunidades
					de SI,<br></br> dedicado à inclusão, oportunidades, e muito conteúdo
					de Blue Team.
				</h4>
				<br></br>
				<h3>Tudo gratuito e online. Início sempre às 20h.</h3>
			</div>
		</div>
	);
}
