<template>
	<div style="padding: 0px 0px 0px 0px; background-color: rgb(245, 245, 245);" class="container-fluid">
		<div class="screen-mobile">
			<div class="screen1024">
				<div class="Leftside-bar">
					<LeftSidebar />
				</div>
			</div>

			<div class="main-content">
				<router-view></router-view>
			</div>
		</div>
	</div>
	<div class="screen1024">
		<RightColumn />
	</div>

</template>
<script>
import LeftSidebar from './components/LeftSidebar.vue'
import TopBar from './components/topbar.vue'
import RightColumn from './components/right.vue'

export default {
	name: 'App',
	components: {
		LeftSidebar,
		TopBar,
		RightColumn,
	}
}
</script>
<style>
html,
body {
	height: 100%;
	margin: 0;
}


body {
	overflow: auto;
}

body::-webkit-scrollbar {
	display: none;
}

.app-container {
	height: 100%;
	width: 100%;
	display: flex;
}

.screen1024 {
	display: flex;
	flex-direction: column;
}

.screen-mobile {
	display: flex;
	flex-direction: column;
	flex: 1;
}

.Leftside-bar {
	width: 206px;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
}

.Topbar-laptop,
.Topbar-TM {
	width: 100%;
}

.main-content {
	flex: 1;
	overflow-y: hidden;
}

@media screen and (max-width:1280px) {
	.screen1024 {
		display: none;
	}
}

@media screen and (max-width: 768px) {
	.Topbar-laptop {
		display: none;
	}

}
</style>