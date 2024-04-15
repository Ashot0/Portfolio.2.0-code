<template>
	<div class="footer">
		<SolarSystem class="footer__solar-system" />
		<div class="footer__wrapper">
			<div class="footer__text-container footer__text-container_1">
				<p class="footer__text">LOOKING</p>
			</div>
			<div class="footer__text-container footer__text-container_2">
				<p class="footer__text">
					F<span class="footer__text_pc">   </span
					><span class="footer__text_phone">O</span>R
				</p>
			</div>
			<div class="footer__text-container footer__text-container_3">
				<p class="footer__text">A JOB</p>
			</div>
		</div>
		<ButtonBlock />
	</div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import AnimatedText from '../components/AnimatedText.vue';
import SolarSystem from '../components/SolarSystem.vue';
import Button from '../components/Button.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStore } from 'vuex';
import ButtonBlock from './ButtonBlock.vue';
gsap.registerPlugin(ScrollTrigger);
export default {
	components: {
		AnimatedText,
		Button,
		SolarSystem,
		ButtonBlock,
	},
	//

	//
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

<style lang="scss" scoped>
.footer {
	position: relative;
	width: 100%;
	height: 100vh;
	font-size: 10vw;
	color: white;
	z-index: 90;
	display: flex;
	justify-content: center;
	align-items: center;
	&__wrapper {
		position: relative;
		width: 100vw;
		display: flex;
		flex-direction: column;
		gap: 5vh;
	}
	&__solar-system {
		position: absolute;
	}
	&__text-container {
		text-wrap: nowrap;
		opacity: 0;
		height: 110px;
		overflow: hidden;
		font-family: 'Merriweather', serif;
		font-style: normal;
		position: relative;
		&_1 {
			width: 531.56px;
			left: 50vw;
			transform: translate(-50%);
		}
		&_2 {
			width: 229.05px;
			left: 50vw;
			transform: translate(-50%);
		}
		&_3 {
			width: 304.31px;
			left: 50vw;
			transform: translate(-50%);
		}
	}
	&__text {
		display: block;
		height: 130px;
		font-size: 7rem;
		color: white;
		position: absolute;
		text-align: center;
		bottom: 0;
		left: 0;
		&_pc {
			display: inline;
		}
		&_phone {
			display: none;
		}
	}
}
@media (orientation: portrait) {
	.footer {
		&__wrapper {
			gap: 0%;
		}
		&__text-container {
			width: 100%;
		}
		&__text {
			top: 0;
			text-align: center;
			font-size: 10vw;
			transform: translate(-50%);
			left: 50vw;
			&_pc {
				display: none;
			}
			&_phone {
				display: inline;
			}
		}
	}
}
</style>
