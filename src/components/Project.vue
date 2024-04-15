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
			<button @click="openLinkLive" class="project__btn" role="link">
				<p >Live</p>
			</button>
			<button v-if="$props.project.code" @click="openLinkCode" class="project__btn" role="link">
				<p >Code</p>
			</button>
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
		const openLinkLive = () => {
			window.open(props.project.live, '_blank');
		}
		const openLinkCode = () => {
			window.open(props.project.code, '_blank');
		}

		onMounted(() => {
			console.log(props.project.live);
		});
		return { projectWrapper, openLinkLive, openLinkCode };
	},
};
</script>

<style lang="scss" scoped>
.project {
	position: relative;
	font-family: 'Merriweather', serif;
	&__wrapper {
		&:hover {
			background-color: rgba(76, 140, 65, 0.9);
		}
		transition: all 1s;
		border-radius: 20px;
		background-color: rgba(76, 140, 65, 0.6);
		width: 320px;
		padding: 20px;
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	&__image {
		backface-visibility: hidden;
		object-fit: cover;
		border-radius: 20px;
		width: 80%;
		height: 160px;
		overflow: hidden;
	}

	&__text-box {
		backface-visibility: hidden;
		font-size: 1rem;
		color: white;
		text-shadow: 1px 1px 4px black;
	}
	&__name{
		font-size: 1.5rem;
		padding: 10px 0;

	}

	&__description {
		display: flex;
		flex-direction: column;
	}

	&__tags {
	}
	&__tag {
		font-size: 1.5rem;
		&_html {
			color: #e5532dff;
		}
		&_css {
			color: #2d53e5ff;
		}
		&_javascript {
			color: #f7e025ff;
		}
		&_typescript {
			color: #377cc8ff;
		}
		&_scss {
			color: #d2699eff;
		}
		&_gsap {
			color: #8bca12ff;
		}
		&_bem {
			color: #26b8ecff;
		}
		&_react {
			color: #66dbfbff;
		}
		&_vite {
			color: #fad362ff;
			text-shadow: 1px 1px 10px #976dfeff;
		}
		&_zustand {
			color: #5f3545ff;
		}
		&_cdn {
			color: #f85a95ff;
		}
		&_axios {
			color: #5c2eddff;
		}
		&_vue {
			color: #08c481ff;
		}
		&_vuex {
			color: #394e62ff;
		}
		&_framermotion {
			color: #ee0bbdff;
			text-shadow: 1px 1px 10px #6710fdff;
		}
		&_react-spring {
			color: #f99a96ff;
		}
		&_swiperjs {
			color: #0884ffff;
		}
		&_threejs {
			color: #080808ff;
		}
	}
	&__btn-box {
		width: 100%;
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 8;
	}
	&__btn {
		a{
			color: rgb(255, 255, 255);
			text-decoration: none;
		}
		padding: 0.6em 2em;
		border: none;
		outline: none;
		color: rgb(255, 255, 255);
		background: #111;
		cursor: pointer;
		position: relative;
		z-index: 20;
		border-radius: 10px;
		&::before {
			content: '';
			background: linear-gradient(45deg, #f8e82f 0%, rgba(251, 65, 9, 1) 100%);
			position: absolute;
			top: -2px;
			left: -2px;
			background-size: 400%;
			z-index: -1;
			filter: blur(5px);
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			animation: glowingbn5 20s linear infinite;
			opacity: 0;
			transition: opacity 0.3s ease-in-out;
			border-radius: 10px;
		}
		&:active {
			color: #00000000;

			&::after {
				background: transparent;
			}
		}
		&:hover::before {
			opacity: 1;
		}
		&::after {
			z-index: -1;
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: #191919;
			left: 0;
			top: 0;
			border-radius: 10px;
		}
	}
}

@keyframes glowingbn5 {
	0% {
		background-position: 0 0;
	}
	50% {
		background-position: 400% 0;
	}
	100% {
		background-position: 0 0;
	}
}
</style>

