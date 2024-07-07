<template>
	<div ref="container" class="solar-system-container"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import sunTexture from '@/assets/Textures/sun.jpg';
import mercuryTexture from '@/assets/Textures/1.jpg';
import venusTexture from '@/assets/Textures/2.jpg';
import earthTexture from '@/assets/Textures/3.jpg';
import marsTexture from '@/assets/Textures/4.jpg';
import jupiterTexture from '@/assets/Textures/5.jpg';
import saturnTexture from '@/assets/Textures/6.png';
import uranusTexture from '@/assets/Textures/7.png';
import neptuneTexture from '@/assets/Textures/8.jpg';
import saturnRingTexture from '@/assets/Textures/saturns-ring.jpg';

export default {
	setup() {
		const container = ref(null);
		let camera, scene, renderer;
		let sun,
			planets = [];
		let angle = 0;

		function init() {
			camera = new THREE.PerspectiveCamera(
				92,
				window.innerWidth / window.innerHeight,
				0.1,
				100
			);
			camera.position.set(0, 10, 0);
			camera.lookAt(0, 0, 0);

			scene = new THREE.Scene();

			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize(window.innerWidth, window.innerHeight);

			container.value.appendChild(renderer.domElement);
			scene.background = new THREE.Color(0x000000);

			window.addEventListener('resize', onWindowResize);
		}

		function createSun() {
			const geometry = new THREE.SphereGeometry(1, 32, 32);
			const texture = new THREE.TextureLoader().load(sunTexture);
			const material = new THREE.MeshBasicMaterial({ map: texture });
			sun = new THREE.Mesh(geometry, material);
			scene.add(sun);
		}

		function createPlanets() {
			const planetData = [
				{
					name: 'Mercury',
					distance: 1.5,
					size: 0.1,
					texture: mercuryTexture,
					speed: 4.1477,
				},
				{
					name: 'Venus',
					distance: 1.7,
					size: 0.1,
					texture: venusTexture,
					speed: 1.6222,
				},
				{
					name: 'Earth',
					distance: 1.9,
					size: 0.2,
					texture: earthTexture,
					speed: 1,
				},
				{
					name: 'Mars',
					distance: 2.4,
					size: 0.2,
					texture: marsTexture,
					speed: 0.5312,
				},
				{
					name: 'Jupiter',
					distance: 2.9,
					size: 0.5,
					texture: jupiterTexture,
					speed: 0.08,
				},
				{
					name: 'Saturn',
					distance: 3.3,
					size: 0.4,
					texture: saturnTexture,
					speed: 0.034,
					hasRings: true,
				},
				{
					name: 'Uranus',
					distance: 3.6,
					size: 0.1,
					texture: uranusTexture,
					speed: 0.0119,
				},
				{
					name: 'Neptune',
					distance: 3.9,
					size: 0.1,
					texture: neptuneTexture,
					speed: 0.0059,
				},
			];

			planetData.forEach((planetInfo) => {
				const texture = new THREE.TextureLoader().load(planetInfo.texture);
				const geometry = new THREE.SphereGeometry(planetInfo.size, 32, 32);
				const material = new THREE.MeshBasicMaterial({ map: texture });
				const planet = new THREE.Mesh(geometry, material);

				if (planetInfo.hasRings) {
					const ringGeometry = new THREE.RingGeometry(
						1.2 * planetInfo.size,
						2 * planetInfo.size,
						64
					);
					const ringTexture = new THREE.TextureLoader().load(saturnRingTexture);
					const ringMaterial = new THREE.MeshBasicMaterial({
						map: ringTexture,
						side: THREE.DoubleSide,
					});
					const ring = new THREE.Mesh(ringGeometry, ringMaterial);
					ring.rotation.x = Math.PI / 2;
					planet.add(ring);
				}

				scene.background = new THREE.Color(0x1f261f);
				planets.push({ planet, speed: planetInfo.speed });
				scene.add(planet);
			});
		}

		function animate() {
			requestAnimationFrame(animate);
			angle -= 0.01;

			if (planets.length > 0) {
				planets.forEach((planetObj, index) => {
					const { planet, speed } = planetObj;
					const distance = index + 3;
					const posX = Math.cos(angle * speed) * distance;
					const posZ = Math.sin(angle * speed) * distance;

					planet.position.set(posX, 0, posZ);
					planet.rotation.y += 0.01;
				});
			}
			render();
		}

		function render() {
			if (renderer) renderer.render(scene, camera);
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		onMounted(() => {
			window.onload = () => {
				init();
				createSun();
				createPlanets();
				animate();
			};
		});

		onUnmounted(() => {
			if (renderer) renderer.dispose();
			camera = null;
			scene = null;
			renderer = null;
			sun = null;
			planets = null;
		});

		return { container };
	},
};
</script>

<style lang="scss" scoped src="./solar-system.scss" />
