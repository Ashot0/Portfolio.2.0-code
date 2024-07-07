<template>
	<div class="right-block">
		<Button
			class="right-block__button"
			:link="'https://www.linkedin.com/in/illia-golovan-816a14269/'"
			:icon="require('@/assets/icons/1.png')"
		/>
		<img
			class="right-block__dot"
			src="@/assets/icons/dot.png"
			alt="right-block__dot"
		/>
		<Button
			class="right-block__button"
			:link="'https://github.com/Ashot0'"
			:icon="require('@/assets/icons/2.png')"
		/>
		<img
			class="right-block__dot"
			src="@/assets/icons/dot.png"
			alt="right-block__dot"
		/>
		<Button
			class="right-block__button"
			:link="'https://t.me/Ashot_69'"
			:icon="require('@/assets/icons/3.png')"
		/>
		<img
			class="right-block__dot"
			src="@/assets/icons/dot.png"
			alt="right-block__dot"
		/>
		<Button
			class="right-block__button"
			:link="'mailto:ilia.holovan@gmail.com'"
			:icon="require('@/assets/icons/4.png')"
		/>
	</div>
</template>

<script>
import { onMounted, computed } from 'vue';
import Button from '@/components/Button/Button.vue';
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
			if (isLoading) {
				setTimeout(() => {
					gsap.fromTo(
						'.right-block',
						{
							right: '-20vw',
						},
						{ duration: 1, right: 0, ease: 'linear' }
					);
				}, 3000);
			}
		});
		return { isLoading, setIsLoading };
	},
};
</script>

<style lang="scss" scoped src="./right-block.scss" />
