import solana from "@/assets/Projects/solana.png";
import profcom from "@/assets/Projects/profcom.png";
import alexCasino from "@/assets/Projects/alex-casino.png";
import wasteProcessing from "@/assets/Projects/waste-processing.png";
import hlegal from "@/assets/Projects/hlegal.png";
import tobto from "@/assets/Projects/tobto.png";
import dom from "@/assets/Projects/dom.png";
import barMitzvah from "@/assets/Projects/bar-mitzvah.png";
import danganronpa from "@/assets/Projects/danganronpa.png";
import portfolio from "@/assets/Projects/portfolio.png";
import tribalClub from "@/assets/Projects/tribal-club.png";
import HetHaartheter from "@/assets/Projects/HetHaartheater.jpg";
import dzencode from "@/assets/Projects/dzencode.jpg";
import weather from "@/assets/Projects/weather.jpg";
import Chuttyevo from "@/assets/Projects/chuttevo.jpg";
import dashboard from "@/assets/Projects/dashboard.jpg";
import pwa from "@/assets/Projects/pwa.jpg";
import TCW from "@/assets/Projects/TCW.jpg";
import invogue from "@/assets/Projects/Invogue.jpg";
import WebStore from "@/assets/Projects/Web-store.jpg";

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
	// {
	// 	name: 'ALEX-casino',
	// 	img: alexCasino,
	// 	description: 'Landing-page casino',
	// 	tags: ['React', 'Framer Motion', 'React-spring', 'BEM', 'Swiper.js'],
	// 	code: 'https://github.com/Ashot0/ALEX-casino',
	// 	live: 'https://ashot0.github.io/ALEX-casino-public/',
	// },
	{
		name: "Hlegal",
		img: hlegal,
		description: "Hlegal web-site project",
		tags: ["HTML", "SCSS", "JavaScript"],
		code: "https://github.com/Ashot0/hlegal",
		live: "https://ashot0.github.io/hlegal/",
	},
	{
		name: 'Web-store',
		img: WebStore,
		description: 'Web-store',
		tags: ['Vue', 'TypeScript', 'SCSS', 'Pinia',],
		code: 'https://github.com/Ashot0/Test-ui-arts',
		live: 'https://ashot0.github.io/Test-ui-arts/',
	},
	// {
	// 	name: 'Dom',
	// 	img: dom,
	// 	description:
	// 		'Limited Liability Company (LLC) Property Management "Dom" A project utilizing an external CDN for image management and delivery. All images are hosted on Imgur.',
	// 	tags: ['React', 'BEM', 'Swiper.js', 'SCSS', 'CDN'],
	// 	code: 'https://github.com/Ashot0/Dom-code',
	// 	live: 'https://ashot0.github.io/Dom/',
	// },
	{
		name: "Weather",
		img: weather,
		description: "Weather web-app",
		tags: ["Vue", "SCSS", "VueX"],
		code: "https://github.com/Ashot0/Weather-code",
		live: "https://ashot0.github.io/Weather/#/",
	},
	{
		name: "Bar Mitzvah",
		img: barMitzvah,
		description:
			"An application for bartenders with multiple connected APIs for alcohol",
		tags: ["TypeScript", "React", "BEM", "Swiper.js", "SCSS", "Axios"],
		code: "https://github.com/Ashot0/BAR-MITZVAH-code",
		live: "https://ashot0.github.io/bar-mitzvah/",
	},

	{
		name: "Tobto",
		img: tobto,
		description:
			"I participated in the development of the application as a front-end developer. photo share service for photographers",
		tags: ["React", "Vite", "SCSS", "Zustand"],
		live: "https://tobto.io/",
		// live: "https://dev.tobto.io/uk/sign-in",
	},
	{
		name: "Danganronpa",
		img: danganronpa,
		description: "The website about Danganronpa anime",
		tags: ["Vue", "VueX", "GSAP"],
		code: "https://github.com/Ashot0/Danganronpa-code",
		live: "https://ashot0.github.io/Danganronpa-public/#/",
	},
	{
		name: "Tribal Club",
		img: tribalClub,
		description: "Website for Tribal Club",
		tags: ["Vue", "GSAP", "VueX", "SCSS", "Axios"],
		code: "https://github.com/Ashot0/Tribal-club",
		live: "https://tribal-club.vercel.app/#/",
		// live: 'https://tribalclub.newtribe.nl/#/',
	},
	{
		name: "Invogue",
		img: invogue,
		description: "I participated in the development of the application as a front-end developer.",
		tags: ["Vue", "PHP", "Laravel", "Blade", "SCSS"],
		live: "https://invogue.ua/ua",
	},
	{
		name: "The Casino Wizard",
		img: TCW,
		description: "I participated in the development of the application as a front-end developer.",
		tags: ["PHP", "Laravel", "Blade", "SCSS"],
		live: "https://thecasinowizard.com/",
	},
	{
		name: "Het-Haartheter-Support",
		img: HetHaartheter,
		description: "Het-Haartheter support",
		tags: ["NUXT"],
		code: "https://github.com/Ashot0/haartheter-support",
		live: "https://haartheter-support.vercel.app/",
	},
	{
		name: "Chuttyevo",
		img: Chuttyevo,
		description:
			"I participated in the development of the application as a front-end developer, including both the online store and its admin panel.",
		tags: ["NUXT", "Pinia", "Tailwind"],
		live: "https://chuttyevo.com.ua/",
	},
	{
		name: "BAT PWA",
		img: pwa,
		description:
			"I participated in the development of the application as a front-end developer, PWA.",
		tags: ["NUXT", "TypeScript"],
		live: "https://bat-pwa.iwis.io/",
		phone: true,
	},
	{
		name: "Dashboard",
		img: dashboard,
		description: "Dashboard-page",
		tags: ["NUXT", "Three.js", "GSAP", "Pinia", "TypeScript"],
		code: "https://github.com/Ashot0/Dashboard",
		live: "https://dashboard-lake-kappa.vercel.app/",
	},
	{
		name: "Portfolio",
		img: portfolio,
		description: "My portfolio",
		tags: ["Vue", "VueX", "GSAP", "Three.js"],
		code: "https://github.com/Ashot0/Portfolio.2.0-code",
		live: "https://ashot0.github.io/Portfolio.2.0-code/#/",
	},


	//
	// 
	// 
	{
		name: "Tobto",
		img: tobto,
		description:
			"I participated in the development of the application as a front-end developer. photo share service for photographers",
		tags: ["React", "Vite", "SCSS", "Zustand"],
		live: "https://tobto.io/",
		// live: "https://dev.tobto.io/uk/sign-in",
	},
	{
		name: "Danganronpa",
		img: danganronpa,
		description: "The website about Danganronpa anime",
		tags: ["Vue", "VueX", "GSAP"],
		code: "https://github.com/Ashot0/Danganronpa-code",
		live: "https://ashot0.github.io/Danganronpa-public/#/",
	},
	{
		name: "Tribal Club",
		img: tribalClub,
		description: "Website for Tribal Club",
		tags: ["Vue", "GSAP", "VueX", "SCSS", "Axios"],
		code: "https://github.com/Ashot0/Tribal-club",
		live: "https://tribal-club.vercel.app/#/",
		// live: 'https://tribalclub.newtribe.nl/#/',
	},

];

export default projects;
