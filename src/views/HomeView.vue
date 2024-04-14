<template>
	<div class="home">
		<Loader />
		<Hero />
		<!-- <Works /> -->
		<WorksBox />
		<!-- <Test /> -->
		<Footer />
	</div>
</template>

<script>
import AnimatedText from '../components/AnimatedText.vue';
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';
import Loader from '../components/Loader.vue';
import WorksBox from '../components/WorksBox.vue';
import gsap from 'gsap';
export default {
	name: 'HomeView',
	components: {
		AnimatedText,
		Hero,
		WorksBox,
		Footer,
		Loader,
	},

	setup(props) {
		return {};
	},
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
::-webkit-scrollbar {
	display: none;
	background-color: inherit;
}
.home {
	background-color: #1f261f;
	overflow: hidden;
	width: 100vw;
	// padding-bottom: 200vh;
}
</style>
