<template>
	<div class="works">
		<div class="works__sticky">
			<div class="works__wrapper">
				<div class="works__sun"></div>
				<div v-for="(project, index) in projects" class="works__orbit">
					<Project class="works__project" :key="index" :project="project" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Project from '@/components/Project/Project.vue';
import projects from '@/components/WorksBox/projects.js';
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);
export default {
	components: {
		Project,
	},
	setup() {
		const container = ref(null);

		onMounted(() => {
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

<style lang="scss" scoped src="./works-box.scss" />
