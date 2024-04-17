<template>
	<div class="home">
		<Loader />
		<Hero />
		<WorksBox />
		<Footer />
	</div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import AnimatedText from '../components/AnimatedText.vue';
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';
import Loader from '../components/Loader.vue';
import WorksBox from '../components/WorksBox.vue';
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
		const store = useStore();

		const isLoading = computed(() => store.getters.checkLoading);

		if (isLoading) {
			onMounted(() => {
				setTimeout(() => {
					window.scrollTo(0, 0);
				}, 300);
			});
		}
		return {};
	},
};
</script>
<style lang="scss">
::-webkit-scrollbar {
	display: none;
	background-color: inherit;
}
h1,
h2 {
	font-weight: normal;
	font-size: 16px;
}
.home {
	background-color: #1f261f;
	overflow: hidden;
	width: 100vw;
	display: flex;
	flex-direction: column;
	gap: 20vh;
}
</style>
