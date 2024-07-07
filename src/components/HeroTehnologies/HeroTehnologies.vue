<template>
	<div class="technologies">
		<div class="technologies__header-wrapper">
			<p class="technologies__header">I work with technologies:</p>
		</div>
		<p class="technologies__list">
			<span class="technologies__element technologies__element_vue3">Vue</span>
			<span class="technologies__element technologies__element_react"
				>React</span
			>
			<span class="technologies__element technologies__element_ts">
				TypeScript
			</span>
			<span class="technologies__element technologies__element_gsap">GSAP</span>
			<span class="technologies__element technologies__element_scss">SCSS</span>
		</p>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';
export default {
	setup() {
		onMounted(() => {
			gsap.fromTo(
				'.technologies__header',
				{
					y: '100%',
					opacity: 0,
				},
				{
					scrollTrigger: {
						trigger: '.technologies__header',
						start: 'bottom bottom',
						end: 'bottom 500px',
						scrub: 1,
					},
					y: '0%',
					opacity: 1,
					duration: 1,
					ease: 'power3.out',
				}
			);
			gsap.fromTo(
				'.technologies__element',
				{
					y: '100%',
					opacity: 0,
				},
				{
					scrollTrigger: {
						trigger: '.technologies__element',
						start: 'bottom bottom',
						end: 'bottom 600px',
						scrub: 1,
					},
					y: '0%',
					opacity: 1,
					duration: 1,
					ease: 'power3.out',
				}
			);
		});

		return {};
	},
};
</script>

<style lang="scss" scoped src="./hero-technologies.scss" />
