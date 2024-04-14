<template>
	<button @click="openLink" class="button" type="button">
		<img class="button__icon" :src="icon" alt="" />
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

<style lang="scss" scoped>
.button {
	&:hover {
		background-color: #4c8c41ff;
	}
	&:active {
		margin: 2px;
		width: 98px;
		height: 98px;
		.button__icon {
			width: 48px;
			height: 48px;
		}
	}
	border: 2px solid #4c8c41ff;
	z-index: 25;
	cursor: pointer;
	background-color: #75c768;
	width: 102px;
	height: 102px;
	border-radius: 50%;
	&__icon {
		position: relative;
		border-radius: 4px;
		width: 50px;
		height: 50px;
	}
}
</style>
