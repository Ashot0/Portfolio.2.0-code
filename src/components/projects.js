import firstImage from '../assets/Projects/1.jpg';
import solana from '../assets/Projects/solana.png';
import profcom from '../assets/Projects/profcom.png';
import alexCasino from '../assets/Projects/alex-casino.png';
import wasteProcessing from '../assets/Projects/waste-processing.png';
import hlegal from '../assets/Projects/hlegal.png';
import tobto from '../assets/Projects/tobto.png';
import dom from '../assets/Projects/dom.png';
import barMitzvah from '../assets/Projects/bar-mitzvah.png';
import danganronpa from '../assets/Projects/danganronpa.png';
import portfolio from '../assets/Projects/portfolio.png';

const projects = [
	{
		name: 'SOLANA',
		img: solana,
		description: 'SOLANA-main-page',
		tags: ['HTML', 'SCSS', 'JavaScript', 'BEM'],
		code: 'https://github.com/Ashot0/Blockchain-site',
		live: 'https://ashot0.github.io/Blockchain-site/',
	},
	{
		name: 'NUOP student union',
		img: profcom,
		description: 'Website for NUOP Student Union',
		tags: ['HTML', 'SCSS', 'JavaScript'],
		code: 'https://github.com/Ashot0/profcom',
		live: 'https://ashot0.github.io/profcom/',
	},
	{
		name: 'Waste-Processing',
		img: wasteProcessing,
		description: 'Website about the importance of recycling',
		tags: ['HTML', 'SCSS', 'JavaScript', 'BEM', 'Swiper.js'],
		code: 'https://github.com/Ashot0/Waste-Processing',
		live: 'https://ashot0.github.io/Waste-Processing/#',
	},
	{
		name: 'ALEX-casino',
		img: alexCasino,
		description: 'Landing-page casino',
		tags: ['React', 'Framer Motion', 'React-spring', 'BEM', 'Swiper.js'],
		code: 'https://github.com/Ashot0/ALEX-casino',
		live: 'https://ashot0.github.io/ALEX-casino-public/',
	},
	{
		name: 'Hlegal',
		img: hlegal,
		description: 'Hlegal web-site project',
		tags: ['HTML', 'SCSS', 'JavaScript'],
		code: 'https://github.com/Ashot0/hlegal',
		live: 'https://ashot0.github.io/hlegal/',
	},
	{
		name: 'Tobto',
		img: tobto,
		description:
			'I participated in the development of the application as a front-end developer. photo share service for photographers',
		tags: ['React', 'Vite', 'SCSS', 'Zustand'],
		live: 'https://dev.tobto.io/uk/sign-in',
	},
	{
		name: 'Dom',
		img: dom,
		description:
			'Limited Liability Company (LLC) Property Management "Dom" A project utilizing an external CDN for image management and delivery. All images are hosted on Imgur.',
		tags: ['React', 'BEM', 'Swiper.js', 'SCSS', 'CDN'],
		code: 'https://github.com/Ashot0/Dom-code',
		live: 'https://ashot0.github.io/Dom/',
	},
	{
		name: 'Bar Mitzvah',
		img: barMitzvah,
		description:
			'An application for bartenders with multiple connected APIs for alcohol',
		tags: ['TypeScript', 'React', 'BEM', 'Swiper.js', 'SCSS', 'Axios'],
		code: 'https://github.com/Ashot0/BAR-MITZVAH-code',
		live: 'https://ashot0.github.io/bar-mitzvah/',
	},
	{
		name: 'Danganronpa',
		img: danganronpa,
		description: 'The website about Danganronpa anime',
		tags: ['Vue', 'VueX', 'GSAP'],
		code: 'https://github.com/Ashot0/Danganronpa-code',
		live: 'https://ashot0.github.io/Danganronpa-public/#/',
	},
	{
		name: 'Portfolio',
		img: portfolio,
		description: 'My portfolio',
		tags: ['Vue', 'VueX', 'GSAP', 'Three.js'],
		code: 'https://github.com/Ashot0/Portfolio.2.0-code',
		live: 'https://ashot0.github.io/Portfolio.2.0-public/#/',
	},
];

export default projects;
