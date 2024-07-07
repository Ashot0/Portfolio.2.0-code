<template>
	<div class="footer">
		<SolarSystem class="footer__solar-system" />
		<div class="footer__wrapper">
			<div class="footer__text-container footer__text-container_1">
				<h1 class="footer__text">LOOKING</h1>
			</div>
			<div class="footer__text-container footer__text-container_2">
				<h2 class="footer__text">
					F<span class="footer__text_pc">   </span
					><span class="footer__text_phone">O</span>R
				</h2>
			</div>
			<div class="footer__text-container footer__text-container_3">
				<h2 class="footer__text">A JOB</h2>
			</div>
		</div>
		<ButtonBlock />
	</div>
</template>

<script>
import { onMounted } from 'vue';
import AnimatedText from '@/components/AnimatedText/AnimatedText.vue';
import SolarSystem from '@/components/SolarSystem/SolarSystem.vue';
import Button from '@/components/Button/Button.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonBlock from '@/components/ButtonBlock/ButtonBlock';
gsap.registerPlugin(ScrollTrigger);
export default {
	components: {
		AnimatedText,
		Button,
		SolarSystem,
		ButtonBlock,
	},
	setup() {
		onMounted(() => {
			gsap.fromTo(
				'.footer__text-container',
				{
					y: '100%',
					opacity: 0,
				},
				{
					scrollTrigger: {
						trigger: '.footer__text',
						start: 'top center',
						end: 'top center',
					},
					duration: 1,
					y: '0%',
					opacity: 1,
					ease: 'power3.out',
				}
			);
		});
		return {};
	},
};
</script>

<style lang="scss" scoped src="./footer.scss" />
