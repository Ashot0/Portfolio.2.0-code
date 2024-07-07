<template>
	<div class="home">
		<Loader />
		<Hero />
		<WorksBox />
		<Footer />
	</div>
</template>

<script>
import { onMounted, onUnmounted, computed } from 'vue';
import { useStore } from 'vuex';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import AnimatedText from '@/components/AnimatedText/AnimatedText.vue';
import Hero from '@/components/Hero/Hero.vue';
import Footer from '@/components/Footer/Footer.vue';
import Loader from '@/components/Loader/Loader.vue';
import WorksBox from '@/components/WorksBox/WorksBox.vue';

export default {
	name: 'HomeView',
	components: {
		AnimatedText,
		Hero,
		WorksBox,
		Footer,
		Loader,
	},
	setup() {
		gsap.registerPlugin(ScrollTrigger);
		const store = useStore();
		let lenisGlobal = null;
		const isLoading = computed(() => store.getters.checkLoading);
		onMounted(() => {
			if (isLoading.value) {
				setTimeout(() => {
					window.scrollTo(0, 0);
				}, 300);
			}
			lenisGlobal = new Lenis({
				smoothWheel: true,
				duration: 0.7,
				wheelMultiplier: 1.2,
				animatedScroll: 0,
				easing: (x) => {
					return Math.sin((x * Math.PI) / 2);
				},
			});
			lenisGlobal.on('scroll', ScrollTrigger.update);
			gsap.ticker.add((time) => {
				lenisGlobal.raf(time * 1000);
			});
			gsap.ticker.lagSmoothing(0);
		});
		onUnmounted(() => {
			if (lenisGlobal) {
				lenisGlobal.destroy();
				lenisGlobal = null;
			}
		});
		return {};
	},
};
</script>

<style lang="scss" src="./home-view.scss" />
