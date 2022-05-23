import { UilGithubAlt, UilInstagram, UilTwitterAlt } from '@iconscout/react-unicons';
import { SocialMediaBarStyled } from '../styles/Header';

export const SocialMediaBar = () => {
	return (
		<SocialMediaBarStyled>
			<a
				href="https://github.com/gabrielfer-dev"
				target="_blank"
				rel="noopener noreferrer">
				<UilGithubAlt size="28" color="#ffffff" />
			</a>
			<a
				href="https://www.instagram.com/gabrielfer.dev/"
				target="_blank"
				rel="noopener noreferrer">
				<UilInstagram size="28" color="#ffffff" />
			</a>
			<a
				href="https://twitter.com/Gabriel95795885"
				target="_blank"
				rel="noopener noreferrer">
				<UilTwitterAlt size="28" color="#ffffff" />
			</a>
		</SocialMediaBarStyled>
	);
};
