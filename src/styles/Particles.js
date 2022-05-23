import styled from 'styled-components';

export const ParticlesContainer = styled.div`
	.polygon1 {
		animation: polygon1Anim 1s ease both;
	}
	@keyframes polygon1Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(40px, -120px);
		}
	}

	.polygon2 {
		animation: polygon2Anim 1s ease both;
	}
	@keyframes polygon2Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(590px, 260px);
		}
	}

	.polygon3 {
		animation: polygon3Anim 1s ease both;
	}
	@keyframes polygon3Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(40px, 420px);
		}
	}

	.ellipse1 {
		animation: ellipse1Anim 1s ease both;
	}
	@keyframes ellipse1Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(190px, 10px);
		}
	}

	.ellipse2 {
		animation: ellipse2Anim 1s ease both;
	}
	@keyframes ellipse2Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(750px, -70px);
		}
	}

	.ellipse3 {
		animation: ellipse3Anim 1s ease both;
	}

	@keyframes ellipse3Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(280px, 400px);
		}
	}

	.rectangle1 {
		animation: rectangle1Anim 1s ease both;
	}

	@keyframes rectangle1Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(490px, 80px);
		}
	}

	.rectangle2 {
		animation: rectangle2Anim 1s ease both;
	}
	@keyframes rectangle2Anim {
		0% {
			transform: translate(-270px, -120px);
		}
		100% {
			transform: translate(-220px, 110px);
		}
	}
`;
