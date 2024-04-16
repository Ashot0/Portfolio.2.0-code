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
			gsap.to('.loader__wrapper', {
				height: '0%',
				top: '-200%',
				duration: 2,
			});
			setIsLoading();
		});
		return {};
	},
};
</script>

<style lang="scss" scoped>
.loader {
	&__wrapper {
		width: 100vw;
		height: 100vh;
		background-color: #1f261f;
		position: fixed;
		top: 0;
		z-index: 100;
		transition: 0.6s;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #d1a8ffff;
	}
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background: #75c768;
	mask: radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000);
	transform-origin: 50% 40%;
	animation: s5 1s infinite linear;
}

@keyframes s5 {
	100% {
		transform: rotate(1turn);
	}
}
@media (orientation: portrait) {
	.loader {
		width: 100px;
		height: 100px;
	}
}
</style>
