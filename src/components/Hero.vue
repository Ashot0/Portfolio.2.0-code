<template>
	<div class="hero">
		<img src="../assets/Blur1.png" class="hero__bg-rotate" />
		<img class="hero__header" src="../assets/ashot-logo.png" alt="" />
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
import AnimatedText from '../components/AnimatedText.vue';
import Button from '../components/Button.vue';
import HeroTehnologies from '../components/HeroTehnologies.vue';
import RightBlock from '../components/RightBlock.vue';
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
<style lang="scss" scoped>
.hero {
	z-index: 10;
	position: relative;
	height: 130vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	&__bg-rotate {
		position: absolute;
		opacity: 0.5;
		left: 50%;
		top: 0%;
		transform: translate(-50%);
	}
	&__header {
		position: absolute;
		top: 5vh;
		left: 2vw;
		width: 100px;
		object-fit: cover;
		opacity: 0.6;
		filter: drop-shadow(0px 0px 4px #75c768ff);
	}
	&__parallax {
		overflow: hidden;
		top: 0;
		position: absolute;
		height: 100vh;
		width: 100vw;
	}

	&__technologies {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 100vh;
		height: 30vh;
		width: 100%;
	}
}

.parallax {
	position: relative;
	&__wrapper {
		pointer-events: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transform-origin: center;
		height: 100vh;
		width: 100vw;
		position: absolute;
	}
	&__img {
		position: absolute;
		max-width: 90%;
		top: 50vh;
		left: 50vw;
		transform: translate(-50%, -50%);
		opacity: 0.7;
	}
	&__text-block {
		position: absolute;
		width: 100%;
		top: 50vh;
		left: 50vw;
		transform: translate(-50%, -50%);
		display: block;
		display: flex;
		flex-direction: column;
		gap: 5vh;
	}
	&__text {
		font-size: 7rem;
		height: 120px;
		overflow: hidden;
		&_1 {
			position: relative;
			top: 0%;
			left: calc(50vw - 450px);
		}
		&_2 {
			position: relative;
			left: calc(50vw - 575px);
		}
		&_3 {
			position: relative;
			left: calc(50vw - 150px);
		}
	}
}
@media (max-width: 1120px) {
	.parallax {
		&__text-block {
			gap: 0%;
		}
		&__text {
			height: 20vh;
			flex-direction: column;
			font-size: 10vw;
			&_1 {
				left: 10vw;
			}
			&_2 {
				left: 17vw;
			}
			&_3 {
				left: 19vw;
			}
		}
	}
}
</style>
