<template>
	<div class="loader__wrapper">
		<div class="loader"></div>
	</div>
</template>

<script>
import gsap from 'gsap';
import { useStore } from 'vuex';
export default {
	setup(props) {
		const store = useStore();

		const setIsLoading = () => {
			store.dispatch('setIsLoading', true);
		};
		window.addEventListener('load', () => {
			setTimeout(() => {
				gsap.to('.loader__wrapper', {
					height: '0%',
					top: '-200%',
					duration: 2,
				});
				setIsLoading();
			}, 400);
		});
		return {};
	},
};
</script>

<style lang="scss" scoped src="./loader.scss" />
