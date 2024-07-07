<template>
	<button @click="openLink" class="button" type="button">
		<img class="button__icon" :src="icon" alt="button__icon" />
	</button>
</template>

<script>
export default {
	props: { icon: String, link: String },
	methods: {
		openLink() {
			window.open(this.link, '_blank');
		},
	},
};
</script>

<style lang="scss" scoped src="./button.scss" />
