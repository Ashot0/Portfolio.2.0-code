<template>
	<div class="works">
		<div class="works__sticky">
			<div class="works__wrapper">
				<div class="works__sun"></div>
				<div v-for="(project, index) in projects" class="works__orbit">
					<Project :class="['works__project', `works__project_${index}`]" :key="index" :project="project" />
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

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

export default {
	components: { Project },
	setup() {
		const container = ref(null);

		onMounted(() => {
			const baseRotateX = -90;               // start X
			const baseRotateY = 360;               // start Y
			const baseRotateZ = -90;               // start Z
			const orbitBaseAngle = 230;            // base angle for orbital animations
			const orbitAngleStep = 36;             // angle step between objects
			const orbitRotationAmount = 595;       // how many degrees extra to rotate
			const orbitDuration = 120;             // duration of one circle
			const orbitEase = 'linear';

			gsap.fromTo(
				'.works__project',
				{
					rotateX: `${baseRotateX}deg`,
					rotateY: `${baseRotateY}deg`,
					rotateZ: `${baseRotateZ}deg`,
				},
				{
					duration: 12,
					repeat: -1,
					rotateX: `${baseRotateX}deg`,
					rotateY: `${baseRotateY}deg`,
					rotateZ: `${baseRotateZ}deg`,
					ease: orbitEase,
				}
			);

			const orbits = document.querySelectorAll('.works__orbit');
			orbits.forEach((orbitEl, index) => {
				const startAngle = orbitBaseAngle + index * orbitAngleStep;
				const endAngle = startAngle + orbitRotationAmount;

				gsap.fromTo(
					orbitEl,
					{ rotateZ: `${startAngle}deg` },
					{
						rotateZ: `${endAngle}deg`,
						duration: orbitDuration,
						ease: orbitEase,
						scrollTrigger: {
							trigger: '.works',
							start: 'top -25%',
							end: 'bottom bottom',
							scrub: true,
						},
					}
				);



			});

			const vh = window.innerHeight / 100;

			const maxVisible = 10;   // how many elements at once
			const scrollGapVH = 1;    // distance between animations 
			const hideStartVH = 190;   // beginning of extinction
			const hideDurationVH = 1;   // duration of disappearance
			const appearStartVH = hideStartVH + hideDurationVH; // start of appearance 2 vh BEFORE end of disappearance
			const appearDurationVH = 1; // the moment appeared 

			const scrollGap = scrollGapVH * vh;
			const hideStartOffset = hideStartVH * vh;
			const hideEndOffset = hideStartOffset + hideDurationVH * vh;
			const appearStartOffset = appearStartVH * vh;
			const appearEndOffset = appearStartOffset + appearDurationVH * vh;

			const works = document.querySelector('.works');
			const projectEls = document.querySelectorAll('.works__project');
			const total = projectEls.length;

			projectEls.forEach((_, index) => {
				const baseSelector = `.works__project_${index} > .project__inner`;
				const reversedIndex = total - index - 1;
				const hideOffset = reversedIndex * scrollGap;

				if (index >= total - maxVisible) {
					// Elements that disappear
					gsap.fromTo(
						baseSelector,
						{ autoAlpha: 1 },
						{
							autoAlpha: 0,
							scrollTrigger: {
								trigger: works,
								start: `top+=${hideOffset + hideStartOffset} top`,
								end: `top+=${hideOffset + hideEndOffset}   top`,
								scrub: true,
							},
						}
					);
				} else {
					// Elements that appear
					const appearIndex = maxVisible - (total - index);
					const appearOffset = appearIndex * scrollGap;

					gsap.fromTo(
						baseSelector,
						{ autoAlpha: 0 },
						{
							autoAlpha: 1,
							scrollTrigger: {
								trigger: works,
								start: `top+=${appearOffset + appearStartOffset} top`,
								end: `top+=${appearOffset + appearEndOffset}   top`,
								scrub: true,
							},
						}
					);
				}
			});
		});

		return { container, projects };
	},
};

</script>

<style lang="scss" scoped src="./works-box.scss" />
