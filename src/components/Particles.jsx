import Polygon1 from '../assets/particles/polygon1.svg';
import Polygon2 from '../assets/particles/polygon2.svg';
import Polygon3 from '../assets/particles/polygon3.svg';
import Ellipse1 from '../assets/particles/ellipse1.svg';
import Ellipse2 from '../assets/particles/ellipse2.svg';
import Ellipse3 from '../assets/particles/ellipse3.svg';
import Rectangle1 from '../assets/particles/rectangle1.svg';
import Rectangle2 from '../assets/particles/rectangle2.svg';

import { ParticlesContainer } from '../styles/Particles';

export const Particles = () => {
	return (
		<ParticlesContainer>
			<img className="polygon1" src={Polygon1} alt="particle" />
			<img className="polygon2" src={Polygon2} alt="particle" />
			<img className="polygon3" src={Polygon3} alt="particle" />
			<img className="ellipse1" src={Ellipse1} alt="particle" />
			<img className="ellipse2" src={Ellipse2} alt="particle" />
			<img className="ellipse3" src={Ellipse3} alt="particle" />
			<img className="rectangle1" src={Rectangle1} alt="particle" />
			<img className="rectangle2" src={Rectangle2} alt="particle" />
		</ParticlesContainer>
	);
};
