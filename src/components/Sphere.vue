<template>
	<div
		ref="container"
		class="sphere-container"
		@mousemove="onMouseMove"
		@touchmove="onTouchMove"
	></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import textureImg from '../assets/Textures/planet.jpg';

export default {
	setup() {
		let container = ref(null);
		let camera, scene, renderer, sphere;
		let mouseX = 0,
			mouseY = 0;

		onMounted(() => {
			init();
			animate();
		});

		onUnmounted(() => {
			// Убрать следующую строку
			// window.removeEventListener('resize', onWindowResize);
			if (renderer) {
				renderer.dispose();
			}
			camera = null;
			scene = null;
			renderer = null;
			sphere = null;
		});

		function init() {
			camera = new THREE.PerspectiveCamera(
				70,
				window.innerWidth / window.innerHeight,
				0.01,
				10
			);
			camera.position.z = 1;

			scene = new THREE.Scene();

			const geometry = new THREE.SphereGeometry(0.5, 32, 32);
			const texture = new THREE.TextureLoader().load(textureImg);
			const material = new THREE.MeshBasicMaterial({ map: texture });

			sphere = new THREE.Mesh(geometry, material);
			scene.add(sphere);

			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize(window.innerWidth, window.innerHeight);

			container.value.appendChild(renderer.domElement);

			scene.background = new THREE.Color(0x1f261f);

			// Задний фон сцены текстурой
			// const textureBgImage = new THREE.TextureLoader().load(textureBg);
			// scene.background = textureBgImage;
			// window.addEventListener('resize', onWindowResize);
		}

		function animate() {
			requestAnimationFrame(animate);
			if (renderer) {
				sphere.rotation.x += 0.005;
				sphere.rotation.y += 0.005;
				const targetX = mouseX * 0.0002;
				const targetY = mouseY * 0.0002;
				sphere.position.x += (targetX - sphere.position.x) * 0.1;
				sphere.position.y += (-targetY - sphere.position.y) * 0.1;

				render();
			}
		}

		function render() {
			if (renderer) {
				renderer.render(scene, camera);
			}
		}
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		// function onMouseMove(event) {
		// 	mouseX = event.clientX - window.innerWidth / 2;
		// 	mouseY = event.clientY - window.innerHeight / 2;
		// }

		// function onTouchMove(event) {
		// 	mouseX = event.touches[0].clientX - window.innerWidth / 2;
		// 	mouseY = event.touches[0].clientY - window.innerHeight / 2;
		// }

		return {
			container,
			// onMouseMove, onTouchMove
		};
	},
};
</script>

<style>
.sphere-container {
	z-index: 0;
	width: 100%;
	height: 100vh;
	background-color: #1f261f;
}
</style>
