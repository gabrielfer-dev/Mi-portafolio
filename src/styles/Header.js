import styled from 'styled-components';

export const NavStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.25em;
`;

export const LinksContainer = styled.div`
	width: 26%;
	display: flex;
	justify-content: space-between;
	& a {
		transition: all 0.3s ease;
		text-decoration: none;
		color: #ffffff;
		font-size: 1rem;
	}

	& a:hover {
		color: #00ff57;
	}
`;

export const ContentHeader = styled.div`
	display: flex;
	align-items: center;
	color: #ffffff;
	padding-top: 12.5em;
	position: absolute;

	& p,
	h1 {
		margin: 0;
	}

	& h1 {
		font-weight: 700;
		font-size: 3.125rem;
	}

	.profession {
		font-size: 1.75rem;
		background-color: #00ff57;
		width: 46%;
		font-weight: 600;
		color: #0e1016;
		padding: 0.125em 0.4375em;
		margin: 0.5em 0;
	}

	.description {
		width: 60%;
		line-height: 1.8;
		color: #b1b7ca;
	}
`;

export const SocialMediaBarStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 3.75em;

	& a:nth-child(2) {
		margin: 1.25em 0;
	}
	svg {
		transition: all 0.3s ease;
	}
	svg:hover {
		fill: #00ff57;
	}
`;
