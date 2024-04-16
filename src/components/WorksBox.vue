<template>
	<div class="works">
		<div class="works__wrapper">
			<div class="works__sun"></div>
			<div v-for="(project, index) in projects" class="works__orbit">
				<Project class="works__project" :key="index" :project="project" />
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Sphere from '../components/Sphere.vue';
import Project from './Project.vue';
import projects from './projects.js';
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);
export default {
	components: {
		Project,
		Sphere,
	},
	setup() {
		const container = ref(null);

		onMounted(() => {
			gsap.fromTo(
				'.works__wrapper',
				{
					top: '0%',
				},
				{
					scrollTrigger: {
						trigger: '.works__wrapper',
						start: '-147% top',
						end: 'top -2000vh',
						scrub: 3,
						pin: true,
					},
					top: '0%',
					duration: 10,
					ease: 'linear',
				}
			);
			gsap.fromTo(
				'.works__project',
				{
					rotateX: '-90deg',
					rotateY: '360deg',
					rotateZ: '-90deg',
				},
				{
					duration: 12,
					repeat: -1,
					rotateX: '-90deg',
					rotateY: '360deg',
					rotateZ: '-90deg',
					ease: 'linear',
				}
			);
			const orbits = document.querySelectorAll('.works__orbit');
			orbits.forEach((project, index) => {
				gsap.fromTo(
					project,
					{
						rotateZ: `${index * 36 + 125}deg`,
					},
					{
						scrollTrigger: {
							trigger: '.works',
							start: 'top top',
							end: 'bottom bottom',
							scrub: true,
						},
						duration: 120,
						rotateZ: `${index * 36 + 720}deg`,
						ease: 'linear',
					}
				);
			});
		});

		return { container, projects };
	},
};
</script>

<style lang="scss">
.works {
	left: 0;
	padding-top: 20vh;
	position: relative;
	width: 100vw;
	height: 457vh;
	// overflow: hidden;
	&__wrapper {
		z-index: 90;
		position: relative;
		width: 100%;
		height: 100vh;
		transform-style: preserve-3d;
		transform: rotateX(75deg);
	}
	.works__sun,
	.works__orbit,
	.works__project {
	}
	&__sun {
		position: absolute;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform-style: preserve-3d;
		width: 2em;
		height: 2em;
		margin-top: -1em;
		margin-left: -1em;
		font-size: 25em; //
		background: linear-gradient(
			to bottom,
			#f8e82f 0%,
			rgba(251, 65, 9, 1) 100%
		);
		box-shadow: 0 0 60px rgba(255, 160, 60, 0.4);
		transform: rotateX(-90deg);
	}
	&__orbit {
		position: absolute;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform-style: preserve-3d;
		width: 24em;
		height: 24em;
		margin-top: -30em;
		margin-left: -12em;
	}
	&__project {
		transform-style: preserve-3d;
		transform: translate(0, -50%);
		position: relative;
		text-align: center;
		left: 190%;
		top: 50%;
	}
}
@media (orientation: portrait) {
	.works {
		&__project {
			margin-left: -15vh;
		}
		&__sun {
			font-size: 20em;
		}
	}
}
</style>
