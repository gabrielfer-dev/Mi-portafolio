import GLogo from '../assets/icons/Logo.svg';
import { LinksContainer, NavStyled } from '../styles/Header';

export const NavBar = () => {
	return (
		<NavStyled>
			<img src={GLogo} alt="gabriel-logo" />

			<LinksContainer>
				<a href="#">Sobre mi</a>
				<a href="#">Portafolio</a>
				<a href="#">Contactame</a>
			</LinksContainer>
		</NavStyled>
	);
};
