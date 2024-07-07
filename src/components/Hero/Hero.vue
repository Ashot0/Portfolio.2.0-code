<template>
	<div class="hero">
		<img src="@/assets/Blur1.png" class="hero__bg-rotate" />
		<img class="hero__header" src="@/assets/ashot-logo.png" alt="" />
		<RightBlock class="hero__left-block" />
		<div ref="parallax" class="hero__parallax">
			<div class="parallax__wrapper">
				<img class="parallax__img" src="@/assets/Painting.png" alt="" />
				<div class="parallax__text-block">
					<p class="parallax__text parallax__text_1">
						<AnimatedText text="ILLIA GOLOVAN" />
					</p>
					<p class="parallax__text parallax__text_2">
						<AnimatedText text="FRONT-END" />
					</p>
					<p class="parallax__text parallax__text_3">
						<AnimatedText text="DEVELOPER" />
					</p>
				</div>
			</div>
		</div>
		<HeroTehnologies class="hero__technologies" />
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AnimatedText from '@/components/AnimatedText/AnimatedText.vue';
import Button from '@/components/Button/Button.vue';
import HeroTehnologies from '@/components/HeroTehnologies/HeroTehnologies.vue';
import RightBlock from '@/components/RightBlock/RightBlock.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default {
	components: {
		AnimatedText,
		Button,
		HeroTehnologies,
		RightBlock,
	},
	setup() {
		gsap.registerPlugin(ScrollTrigger);

		const parallax = ref(null);

		onMounted(() => {
			gsap.to('.hero__bg-rotate', {
				rotationZ: '360deg',
				duration: 30,
				repeat: -1,
			});
			gsap.to('.parallax__text-block', {
				scrollTrigger: {
					trigger: '.parallax__text-block',
					start: 'bottom bottom',
					end: 'bottom top',
					scrub: true,
				},
				gap: '10vh',
				duration: 3,
				ease: 'linear',
			});

			parallax.value.addEventListener('mousemove', (e) => {
				const { clientX, clientY } = e;
				const { offsetWidth, offsetHeight } = parallax.value;
				const x = (clientX / window.innerWidth - 0.5) * 10;
				const y = (clientY / window.innerHeight - 0.5) * 10;
				gsap.to('.parallax__wrapper', {
					duration: 2,
					rotationX: -y,
					rotationY: x,
					transformPerspective: 1000,
					ease: 'power2.out',
				});
			});

			parallax.value.addEventListener('mouseleave', () => {
				setTimeout(() => {
					gsap.to('.parallax__wrapper', {
						duration: 8,
						rotationX: 0,
						rotationY: 0,
						transformPerspective: 500,
						ease: 'power2.out',
					});
				}, 50000);
			});
		});
		return { parallax };
	},
};
</script>
<style lang="scss" scoped src="./hero.scss" />
