<template>
	<div ref="animationContainer" class="animation-container"></div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from '@/assets/Dot_loading_Animation.json'; // Adjust the path as needed

export default {
	name: 'Dot Loading',
	mounted() {
		this.loadAnimation();
	},
	methods: {
		loadAnimation() {
			lottie.loadAnimation({
				container: this.$refs.animationContainer, // The container where the animation will be rendered
				animationData: animationData, // The animation data (JSON)
				renderer: 'svg', // Renderer type ('svg', 'canvas', or 'html')
				loop: true, // Whether to loop the animation
				autoplay: true // Whether to start playing the animation immediately
			});
		}
	}
};
</script>

<style scoped>
.animation-container {
	width: 100%;
	height: 100%;
	/* Adjust width and height as needed */
}
</style>
