<template>
	<div class="left-sidebar">
		<div class="container-fluid">
			<!--leftside-->
			<div class="sidebar" style="background-color: #007BD2;">
				<div style="background: white; height: 100%; border-top-right-radius: 50px;">
					<router-link to="/">
						<div class="logo_col">
							<img class="d_num_logo" src="/image/Winbox_4D_Logo_v2.webp">
						</div>
					</router-link>
					<div class="sidebar-main">
						<p class="results_install_app_text">{{ $t('Sidebar.Result') }}</p>
						<!-- Dashboard -->
						<router-link to="/" exact active-class="active-link">
							<div class="menu"
								:style="{ backgroundColor: activeTab === 'dashboard' ? 'rgb(0, 123, 210, 0.2)' : '' }">
								<div class="text_col">
									<img class="pic" :src="imageSrcForTab('dashboard')">
									<p :style="{ color: activeTab === 'dashboard' ? '#007BD2' : '', fontWeight: activeTab === 'dashboard' ? '700' : 'normal' }"
										class="text_menu">{{ $t('Sidebar.Dashboard') }}</p>
								</div>
							</div>
						</router-link>
						<br>
						<p class="toolbox_text">{{ $t('Sidebar.ToolBox') }}</p>
						<!-- Spin My Luck -->
						<router-link to="/spin-my-luck" exact active-class="active-link">
							<div class="menu"
								:style="{ backgroundColor: activeTab === 'spin' ? 'rgb(0, 123, 210, 0.2)' : '' }">
								<div class="text_col">
									<img class="pic" :src="imageSrcForTab('spin')">
									<p :style="{ color: activeTab === 'spin' ? '#007BD2' : '', fontWeight: activeTab === 'spin' ? '700' : 'normal' }"
										class="text_menu">{{ $t('Sidebar.Spin My Luck') }}</p>
								</div>
							</div>

						</router-link>
						<!-- Lucky Book -->
						<router-link to="/lucky-book" exact active-class="active-link">
							<div class="menu"
								:style="{ backgroundColor: activeTab === 'book' ? 'rgb(0, 123, 210, 0.2)' : '' }">
								<div class="text_col">
									<img class="pic" :src="imageSrcForTab('book')">
									<p :style="{ color: activeTab === 'book' ? '#007BD2' : '', fontWeight: activeTab === 'book' ? '700' : 'normal' }"
										class="text_menu">{{ $t('Sidebar.Lucky Book') }}</p>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LeftBar',
	data() {
		return {
			activeTab: '', // This should be set based on the current active tab
			imageSrc: {
				dashboard: '/image/dashboard.webp',
				spin: '/image/spin.svg',
				book: '/image/book.svg'
			},
			activeImageSrc: {
				dashboard: '/image/dashboard_Active.svg',
				spin: '/image/spin_Active.svg',
				book: '/image/book_Active.svg'
			}
		};
	},
	watch: {
		// Watch for changes in the route to update the activeTab
		'$route'(to) {
			if (to.path.startsWith('/lucky-book')) {
				this.activeTab = 'book';
			} else if (to.path === '/') {
				this.activeTab = 'dashboard';
			} else if (to.path === '/spin-my-luck') {
				this.activeTab = 'spin';
			} else {
				this.activeTab = '';
			}
		}
	},
	computed: {
		imageSrcForTab() {
			return (tab) => {
				return this.activeTab === tab ? this.activeImageSrc[tab] : this.imageSrc[tab];
			}
		}
	}
}
</script>

<style scoped>
/*4D Logo*/
.logo_col {
	display: flex;
	justify-content: center;
}

.d_num_logo {
	padding-top: 20px;
	width: 60px;
	height: auto;
}

/*sidebar*/
.sidebar {
	width: 206px;
	background-color: #ffffff;
	color: #fff;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	overflow-y: auto;
	z-index: 9999;
}

.sidebar-main {
	padding-top: 20px;
	padding-left: 25px;
	padding-right: 5px
}

.pic {
	width: 20px;
	height: 19px;
}

.text_menu {
	text-decoration: none;
	text-align: left;
	font-size: 17px;
	color: gray;
	margin-left: 10px;
	font-weight: 500;
	margin-bottom: 0 !important;
}

.menu {
	width: 100%;
	font-weight: 500;
	font-size: 28px;
	line-height: 19px;
	-webkit-box-align: center;
	align-items: center;
	color: rgb(38, 76, 170);
	border-radius: 4px;
	cursor: unset;
	align-content: center;
	height: 40px;
}

.menu:hover {
	background-color: rgb(0, 123, 210, 0.2);
}

.sidebar ul li {
	padding: 8px;
	text-align: left;
	text-decoration: none;
}

.sidebar ul li a {
	color: rgb(248, 247, 247);
	text-decoration: none;
	display: block;
}

.sidebar ul li a :hover {
	background-color: #ffffff;
}

.toolbox_text {
	height: 16px;
	position: relative;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	-webkit-box-align: center;
	align-items: center;
	color: rgb(0, 0, 0);
	padding-bottom: 0 !important;
}

.results_install_app_text {
	height: 16px;
	position: relative;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	-webkit-box-align: center;
	align-items: center;
	padding-top: 40px;
	padding-bottom: 20px;
	color: rgb(0, 0, 0);
}

.text_col {
	display: ruby;
}

.active-link .text_menu {
	color: #007BD2;
	font-weight: 700 !important;
}
</style>
