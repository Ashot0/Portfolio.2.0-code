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

<style lang="scss" scoped>
.button {
	&:hover {
		background-color: #4c8c41ff;
	}
	&:active {
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
	min-height: 102px;
	min-width: 102px;
	border-radius: 50%;
	position: relative;
	&__icon {
		position: relative;
		border-radius: 4px;
		width: 50px;
		height: 50px;
	}
}
@media (orientation: portrait) {
	.button {
		width: 62px;
		height: 62px;
		min-width: 62px;
		min-height: 62px;
		&__icon {
			width: 25px;
			height: 25px;
		}
		&:active {
			.button__icon {
				width: 23px;
				height: 23px;
			}
		}
	}
}
</style>
