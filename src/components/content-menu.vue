<template>
	<!-- Hamburger Button -->
	<button class="content_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
		aria-controls="offcanvasNavbar">
		<img class="dashboard_icon" src="/image/dashboard-topbar.svg" alt="dashboard icon">
	</button>

	<!-- Offcanvas Sidebar -->
	<div class="offcanvas offcanvas-start offcanvas-custom-width border-top-bottom-right-80px width-sidebar"
		tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbarLabel"
		:style="currentTheme === 'dark' ? 'background-color: rgb(58, 58, 58)' : 'background-color: rgb(255, 255, 255)'">
		<div class="offcanvas-header">
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>

		<div class="offcanvas-body">
			<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
				<router-link to="/">
					<div class="logo_col">
						<img class="d_num_logo" src="/image/Winbox_4D_Logo_v2.webp">
					</div>
				</router-link>
				<li class="nav-item" :style="currentTheme === 'dark' ? 'color: rgb(234, 234, 234)' : 'color: black'">
					<h5 class="nav-link">{{ $t('Sidebar.Result') }}</h5>
				</li>
				<li class="nav-item" :class="{ active: isActive('/') }">
					<router-link class="nav-link" to="/" :class="[
						{ active: isActive('/') },
						currentTheme === 'dark' ? 'DT_Sidebar_Active_Text' : 'LT_Sidebar_Active_Text',
						currentTheme === 'dark' ? 'DT_Sidebar_Active_Bar_M' : 'LT_Sidebar_Active_Bar_M'
					]" :style="{ color: isActive('/') ? 'var(--color)' : 'var(--color)', fontWeight: isActive('/') ? '900' : '700' }">
						<img :src="getImageSrc('/', '/image/dashboard.webp', currentTheme === 'dark' ? '/image/dashboard_Active_DT.svg' : '/image/dashboard_Active.svg')"
							style="width: 25px; margin-right: 13px;" />
						{{ $t('Sidebar.Dashboard') }}
					</router-link>
				</li>
				<li style="margin-top: 20px;" class="nav-item"
					:style="currentTheme === 'dark' ? 'color: rgb(234, 234, 234)' : 'color: black'">
					<h5 class="nav-link">{{ $t('Sidebar.ToolBox') }}</h5>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/spin-my-luck" :class="[
						{ active: isActive('/spin-my-luck') },
						currentTheme === 'dark' ? 'DT_Sidebar_Active_Text' : 'LT_Sidebar_Active_Text',
						currentTheme === 'dark' ? 'DT_Sidebar_Active_Bar_M' : 'LT_Sidebar_Active_Bar_M'
					]" :style="{ color: `var(--color)`, fontWeight: '700' }">
						<img :src="getImageSrc('/spin-my-luck', '/image/spin.webp', currentTheme === 'dark' ? '/image/spin_Active_DT.svg' : '/image/spin_Active.svg')"
							style="width: 25px; margin-right: 13px;" />
						{{ $t('Sidebar.Spin My Luck') }}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/lucky-book" :class="[
						{ active: isActive('/lucky-book') },
						currentTheme === 'dark' ? 'DT_Sidebar_Active_Text' : 'LT_Sidebar_Active_Text',
						currentTheme === 'dark' ? 'DT_Sidebar_Active_Bar_M' : 'LT_Sidebar_Active_Bar_M'
					]" :style="{ color: `var(--color)`, fontWeight: '700' }">
						<img :src="getImageSrc('/lucky-book', '/image/book.svg', currentTheme === 'dark' ? '/image/book_Active_DT.svg' : '/image/book_Active.svg')"
							style="width: 25px; margin-right: 13px;" />
						{{ $t('Sidebar.Lucky Book') }}
					</router-link>
				</li>
				<li style="margin-top: 20px;" class="nav-item"
					:style="currentTheme === 'dark' ? 'color: rgb(234, 234, 234)' : 'color: black'">
					<h5 class="nav-link">{{ $t('Sidebar.Setting') }}</h5>
				</li>
				<li class="nav-item">
					<img src="/image/Earth_icon.svg" style="width: 25px; margin-right: 13px;" />
					<button style="padding: 0;" class="btn dropdown-toggle" type="button" id="dropdownMenuButton"
						data-bs-toggle="dropdown" aria-expanded="false"
						:style="currentTheme === 'dark' ? 'color: white' : 'color: black'">
						{{ $t('Sidebar.Language') }}
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<li><a class="dropdown-item" @click="changeLanguage('en')">English</a></li>
						<li><a class="dropdown-item" @click="changeLanguage('zh')">中文</a></li>
						<li><a class="dropdown-item" @click="changeLanguage('ms')">Malay</a></li>
					</ul>
				</li>

				<li class="Theme_Switch_Button"
					:class="currentTheme === 'dark' ? 'DT_Theme_Button' : 'LT_Theme_Button'">
					<button @click="toggleTheme"
						:style="currentTheme === 'dark' ? 'color: rgb(0, 123, 210) ' : 'color: black'">
						{{ currentTheme === 'dark' ? $t('Theme.Dark') : $t('Theme.Light') }}
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Content-Menu',
	data() {
		return {
			sidebarOpen: false
		}
	},
	methods: {
		isActive(route) {
			if (route === '/') {
				return this.$route.path === route || this.$route.path === '/';
			}
			return this.$route.path.startsWith(route);
		},
		changeLanguage(lang) {
			this.$i18n.locale = lang;
		},
		getImageSrc(route, defaultImage, activeImage) {
			return this.isActive(route) ? activeImage : defaultImage;
		},
		toggleTheme() {
			const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
			this.$store.dispatch('changeTheme', newTheme); // Dispatch action to change theme

			this.sidebarOpen = true;
		},
	},
	mounted() {
		const offcanvas = document.getElementById('offcanvasNavbar2');

		offcanvas.addEventListener('show.bs.offcanvas', () => {
			('HIHI')
			document.body.style.overflow = 'hidden'; // Disable body scroll when sidebar opens
		});

		offcanvas.addEventListener('hidden.bs.offcanvas', () => {
			('Bye')
			document.body.style.overflow = 'auto'; // Enable body scroll when sidebar closes
		});

		this.$router.beforeEach((to, from, next) => {
			document.body.style.overflow = 'auto'; // Reset overflow to auto on route change
			next();
		});
	},
	computed: {
		...mapGetters(['currentTheme']),
	}
}
</script>

<style scoped>
*,
::after,
::before {
	z-index: unset;
}

.content_btn {
	position: absolute;
	top: 71px;
	left: 20px;
	z-index: 2;
	background-color: white !important;
	border: 0 !important;
	color: #000 !important;
	opacity: 0.8;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	font-size: 15px;
	font-weight: 700;
}

.btn-close {
	margin: 50px 32px 0px 24px;
	position: absolute;
	right: 0;
}


.offcanvas-custom-width {
	--bs-offcanvas-width: 320px;
	/* Set your desired width here */
}

.offcanvas.offcanvas-start.border-top-bottom-right-80px.width-sidebar {
	z-index: 9999;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	height: 100vh;
	text-align: left;
}

.nav-item h5 {
	font-weight: 700;
}

.pic {
	width: 20px;
	height: 19px;
}

.active {
	color: #007BD2;
	background-color: var(--background-color);
	font-weight: 700;
}

.dashboard_icon {
	background-color: #6EC1E4;
	width: 30px;
	height: auto;
}

.logo_col {
	display: flex;
	justify-content: center;
}

.d_num_logo {
	width: 60px;
	height: auto;
}

.Theme_Switch_Button {
	margin-top: 20px;
	background-color: var(--background-color);
	border: var(--border);
	border-radius: 10px;
	padding: 2px 4px;
	width: 140px;
	text-align: center;
}

.Theme_Switch_Button button {
	background-color: transparent;
	border: 0;
}
</style>