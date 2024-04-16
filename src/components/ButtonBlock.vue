<template>
	<div class="bottom-block">
		<Button
			class="bottom-block__button"
			:link="'https://www.linkedin.com/in/illia-golovan-816a14269/'"
			:icon="require('@/assets/icons/1.png')"
		/>
		<img
			class="bottom-block__dot"
			src="@/assets/icons/dot.png"
			alt="bottom-block__dot"
		/>
		<Button
			class="bottom-block__button"
			:link="'https://github.com/Ashot0'"
			:icon="require('@/assets/icons/2.png')"
		/>
		<img
			class="bottom-block__dot"
			src="@/assets/icons/dot.png"
			alt="bottom-block__dot"
		/>
		<Button
			class="bottom-block__button"
			:link="'https://t.me/Ashot_69'"
			:icon="require('@/assets/icons/3.png')"
		/>
		<img
			class="bottom-block__dot"
			src="@/assets/icons/dot.png"
			alt="bottom-block__dot"
		/>
		<Button
			class="bottom-block__button"
			:link="'mailto:ilia.holovan@gmail.com'"
			:icon="require('@/assets/icons/4.png')"
		/>
	</div>
</template>

<script>
import { onMounted, computed } from 'vue';
import Button from '../components/Button.vue';
import { gsap } from 'gsap';
export default {
	components: {
		Button,
	},
	setup() {
		const isLoading = computed(() => store.getters.checkLoading);

		const setIsLoading = () => {
			store.dispatch('setIsLoading', true);
		};
		onMounted(() => {
			gsap.fromTo(
				'.bottom-block',
				{
					bottom: '-20vw',
					opacity: 0,
				},
				{
					scrollTrigger: {
						trigger: '.footer',
						start: 'top center',
						end: 'top center',
					},
					duration: 1,
					bottom: '0',
					opacity: 1,
					ease: 'linear',
				}
			);
		});
		return { isLoading, setIsLoading };
	},
};
</script>

<style lang="scss" scoped>
.bottom-block {
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	bottom: -20vh;
	width: 80vw;
	height: 200px;
	&__dot {
		width: 34px;
		z-index: 25;
	}
}
@media (orientation: portrait) {
	.bottom-block {
		width: 90vw;
		&__dot {
			width: 14px;
			z-index: 25;
		}
	}
}
</style>
