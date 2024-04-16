<template>
	<div ref="textRef" class="text__wrapper">
		<p class="text">{{ text }}</p>
	</div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import { useStore } from 'vuex';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'AnimatedText',
	props: {
		text: String,
	},

	setup(props) {
		const store = useStore();

		const isLoading = computed(() => store.getters.checkLoading);

		const textRef = ref(null);

		onMounted(() => {
			const tl = gsap.timeline();

			if (isLoading) {
				setTimeout(() => {
					tl.fromTo(
						textRef.value,
						{
							scrollTrigger: {
								trigger: '.text__wrapper',
								start: 'top center',
								end: 'bottom center',
							},
							y: '100%',
							opacity: 0,
						},
						{
							y: '0%',
							opacity: 1,
							duration: 1,
							ease: 'power3.out',
						}
					);
				}, 3000);
			}
		});
		return {
			textRef,
			isLoading,
		};
	},
};
</script>

<style lang="scss" scoped>
.text {
	&__wrapper {
		text-wrap: nowrap;
		opacity: 0;
		width: 100%;
		height: 120px;
		overflow: hidden;
		font-family: 'Merriweather', serif;
		font-style: normal;
		position: relative;
	}
	display: block;
	height: 120px;
	color: white;
	position: absolute;
	bottom: 0;
	left: 0;
}
</style>
