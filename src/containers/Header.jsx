import { NavBar } from '../components/NavBar';
import { Particles } from '../components/Particles';
import GreenLight from '../assets/background/greenLight.svg';
import { GreenLightStyled } from '../styles/Main';
import { ContentHeader } from '../styles/Header';
import { SocialMediaBar } from '../components/SocialMediaBar';

export const Header = () => {
	return (
		<>
			<GreenLightStyled src={GreenLight} alt="" />
			<NavBar />

			<ContentHeader>
				<SocialMediaBar />
				<div>
					<h1>Hola Soy Gabriel</h1>
					<p className="profession">Desarrollador Web</p>
					<p className="description">
						Lorem ipsum dolor sit amet, consectetur adi piscing elit. Interdum diam.
					</p>
				</div>
			</ContentHeader>

			<Particles />
		</>
	);
};
