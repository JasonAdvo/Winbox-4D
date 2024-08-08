<template>
	<div>
		<!-- Loading Screen -->
		<div v-if="showLoadingScreen" class="loading-screen">
			<div class="Mobile-topbar">
				<TopBar />
			</div>
			<div class="popUp">
				<img :class="{ 'popUp': !showLoadingScreen }" src="/image/dabehgong-part.gif" alt="dabehgong" />
				<div class="progress-bar">
					<div class="progress-fill" :style="{ width: progressBarWidth + '%' }"></div>
				</div>
			</div>
		</div>
		<!-- Main Content -->
		<div v-show="!showLoadingScreen">
			<MobileView v-if="isMobile" @data-fetched="handleDataFetched" />
			<DesktopView v-else @data-fetched="handleDataFetched" />
		</div>
	</div>
</template>

<script>
import MobileView from '/src/components/dashboard_Mobile.vue';
import DesktopView from '/src/components/dashboard_Web.vue';
import DotLoading from '@/components/DotLoading.vue'; // Adjust the path as needed
import TopBar from '/src/components/topbar.vue';

export default {
	data() {
		return {
			isMobile: window.innerWidth <= 769, // Initial state based on window width
			showLoadingScreen: true, // Track loading screen visibility
			fetchDuration: 0, // Store the duration for hiding the loading screen
			progressBarWidth: 0, // Progress bar width percentage
			progressInterval: null // Store interval ID for progress bar
		};
	},
	components: {
		MobileView,
		DesktopView,
		TopBar,
		DotLoading
	},
	mounted() {
		this.checkScreenSize();
		window.addEventListener('resize', this.checkScreenSize);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.checkScreenSize);
		clearInterval(this.progressInterval); // Clear interval on component destruction
	},
	methods: {
		checkScreenSize() {
			const wasMobile = this.isMobile;
			this.isMobile = window.innerWidth <= 769;
			const isCrossingThreshold = wasMobile !== this.isMobile;

			// Trigger loading screen if crossing threshold
			if (isCrossingThreshold) {
				this.showLoadingScreen = true;
				this.startProgressBar();
			}
		},
		handleDataFetched(duration) {
			// Store the duration to be used in checkScreenSize
			this.fetchDuration = duration;
			this.startProgressBar();
		},
		startProgressBar() {
			this.progressBarWidth = 0;
			clearInterval(this.progressInterval); // Clear any existing interval
			const increment = 100 / (this.fetchDuration * 20); // 20 intervals per second

			this.progressInterval = setInterval(() => {
				this.progressBarWidth += increment;
				if (this.progressBarWidth >= 100) {
					clearInterval(this.progressInterval);
					this.progressBarWidth = 100; // Ensure it doesn't exceed 100%
					this.showLoadingScreen = false; // Hide loading screen
				}
			}, 50); // Update every 50ms
		}
	},
};
</script>


<style>
@media screen and (max-width: 769px) {
	.Mobile-topbar {
		display: none;
	}
}

.loading-screen {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: white; */
	/* or any other background color */
	z-index: 9999;
	/* To ensure it is on top of other elements */
}

.loading-screen img {
	/* max-width: 100px; */
	/* Adjust the image size as needed */
	transition: opacity 0.5s ease, transform 0.5s ease;
}

.popUp {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.popUp img {
	width: 200px;
}

.progress-bar {
	width: 100%;
	height: 10px;
	background-color: #e0e0e0;
	/* Light grey background */
	border-radius: 5px;
	overflow: hidden;
	margin-top: 20px;
	/* Adjust spacing as needed */
}

.progress-fill {
	height: 100%;
	background-color: #3b82f6;
	/* Blue color for the progress bar */
	transition: width 0.05s ease;
	/* Smooth transition */
}
</style>
