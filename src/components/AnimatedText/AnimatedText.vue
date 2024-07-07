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

<style lang="scss" scoped src="./animated-text.scss" />
