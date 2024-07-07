<template>
	<div ref="projectWrapper" class="project__wrapper">
		<img class="project__image" :src="$props.project.img" alt="" />
		<div class="project__text-box">
			<p class="project__description">
				<p  class="project__name">{{ $props.project.name }}</p>
				{{ $props.project.description }}
			</p>
			<span v-for="tag in $props.project.tags" class="project__tags">
				<span
					:class="
						'project__tag project__tag_' +
						tag.toLowerCase().replace(/[.\s]/g, '')
					"
					>{{ tag + ' ' }}
				</span>
			</span>
		</div> 
		<div class="project__btn-box">
			<a :href="$props.project.live" target="_blank" class="project__link" role="link">
				<span >Live</span>
			</a>
			<a v-if="$props.project.code" :href="$props.project.code" target="_blank" class="project__link" role="link">
				<span >Github</span>
			</a>
		</div>
	</div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
export default {
	props: {
		project: {
			img: String,
			description: String,
			tags: Array,
			code: String,
			live: String,
		},
	},
	setup(props) {
		const projectWrapper = ref(null);
		onMounted(() => {
		});
		return { projectWrapper };
	},
};
</script>

<style lang="scss" scoped src="./project.scss" />

