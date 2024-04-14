<template>
	<div class="works">
		<div class="works__wrapper">
			<div class="works__sun"></div>
			<div v-for="(project, index) in projects" class="works__orbit">
				<Project class="works__project" :key="index" :project="project" />
			</div>
			<!-- <div class="works__orbit">
				<Project
					class="works__project"
					v-for="(project, index) in projects"
					:key="index"
					:project="project"
				/>
			</div> -->
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
						start: 'top center',
						end: 'top -1000vh',
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
							trigger: '.works__orbit',
							start: 'center center',
							end: 'top -1800vh',
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
	padding-top: 10vh;
	position: relative;
	width: 100vw;
	height: 300vh;
	overflow: hidden;
	&__wrapper {
		position: relative;
		width: 100%;
		height: 100vh;
		transform-style: preserve-3d;
		transform: rotateX(75deg);
	}
	.works__sun,
	.works__orbit {
		position: absolute;
		border-radius: 50%;
		left: 50%;
		top: 50%;
	}
	.works__sun,
	.works__orbit,
	.works__project {
		top: 50%;
		transform-style: preserve-3d;
	}
	&__sun {
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
		width: 24em;
		height: 24em;
		margin-top: -12em;
		margin-left: -12em;
	}
	&__project {
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
			margin-left: -20vh;
		}
	}
}
</style>
