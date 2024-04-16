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
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
export default {
	setup() {
		onMounted(() => {
			const tl = gsap.timeline();
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

<style lang="scss" scoped>
.technologies {
	font-family: 'Merriweather', serif;
	font-size: 48px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	color: white;
	&__element {
		&_vue3 {
			color: #41b883;
		}
		&_react {
			color: #5ccfee;
		}
		&_ts {
			color: #2d6eb6;
		}
		&_gsap {
			color: #08e448;
		}
		&_scss {
			color: #c36291;
		}
	}
	&__move-text {
		height: 100px;
		overflow: hidden;
	}
	&__header {
	}
	&__header-wrapper {
		position: absolute;
		overflow: hidden;
		height: 60px;
		top: 0;
	}
	&__list {
		top: 80px;
		height: 60px;
		overflow: hidden;
		display: flex;
		gap: 20px;
		position: absolute;
	}
}
@media (orientation: portrait) {
	.technologies {
		font-size: 5vw;
		text-align: center;
		&__header-wrapper {
			height: 5vw;
		}
		&__list {
			// margin-top: 50px;
			text-align: center;
			height: 7vw;

			// flex-direction: column;
			gap: 2vw;
		}
	}
}
</style>
