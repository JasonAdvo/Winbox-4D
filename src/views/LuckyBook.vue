<template>
	<div class="Topbar-mobile-view">
		<TopBar />
	</div>

	<div class="container">
		<div style="position: relative;">
			<div class="Content-mobile-view">
				<ContentMenu />
			</div>
			<div style="text-align: -webkit-center;">
				<div class="title">
					<p>{{ $t('Sidebar.Lucky Book') }}</p>
				</div>
			</div>
		</div>

		<!--search bar-->
		<div style="text-align: -webkit-center;">
			<div class="search_col">
				<div class="input-container">
					<div class="input-wrapper">
						<svg v-if="searchQuery !== ''" @click="clearSearch" xmlns="http://www.w3.org/2000/svg"
							width="30" style="transform: rotate(-90deg); cursor: pointer;" height="30" fill="#6EC1E4"
							class="bi bi-arrow-up-circle-fill back-button" viewBox="0 0 16 16">
							<path
								d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
						</svg>
						<input v-model="searchQuery" @keyup.enter="performSearch"
							class="form-control form-control-dark search_input"
							:placeholder="$t('LuckyBook.Search placeholder')" />
						<svg v-if="searchQuery !== ''" @click="clearSearch" xmlns="http://www.w3.org/2000/svg"
							width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill close_btn"
							viewBox="0 0 16 16">
							<path
								d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
						</svg>
					</div>
				</div>
				<!--search_btn-->
				<button @click="performSearch" class="search_btn">{{ $t('LuckyBook.Search') }}</button>
			</div>
		</div>



		<div class="big_col" v-if="showSearchResults">
			<!-- Display search results -->
			<ul style="justify-content: center;" class="nav nav-tabs justify-content-center " role="tablist">
				<li style="width: 31.5%;" class="nav-item">
					<a class="nav-link active" data-bs-toggle="tab" href="#TuaPekKongWan">WZT</a>
				</li>

				<li style="width: 31.5%;" class="nav-item">
					<a class="nav-link" data-bs-toggle="tab" href="#GuanYin">GZT</a>
				</li>

				<li style="width: 31.5%;" class="nav-item">
					<a class="nav-link" data-bs-toggle="tab" href="#TuaPekKongQian">QZT</a>
				</li>
			</ul>
			<br>

			<div class="tab-content">
				<!--TuaPekKong (Wan)-->
				<div id="TuaPekKongWan" class="container tab-pane active">
					<div>
						<div class="search-message">
							<p>{{ $t('LuckyBook.Found') }}
								{{ wzt.length }}
								{{ $t('LuckyBook.result') }}
								{{ wzt.length !== 1 ? '' : '' }}
								{{ $t('LuckyBook.for') }}
								"{{ searchQuery }}"</p>
						</div>

						<ul class="search-ul">
							<li v-for="item in wzt" :key="item.number" class="search-result">
								<div class="number_col">
									<p>{{ item.number }}</p>
								</div>
								<div class="images">
									<img :src="`/imgs/wzt_webp/${item.image} `" :alt="item.content[language]" />
								</div>
								<div class="content">
									<p>
										{{ item.content[language] }}
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<!--GuanYinMa-->
				<div style="text-decoration: none;" id="GuanYin" class="container tab-pane fade">
					<div class="search-message">
						<p>{{ $t('LuckyBook.Found') }}
							{{ gzt.length }}
							{{ $t('LuckyBook.result') }}
							{{ gzt.length !== 1 ?
								'' : '' }}
							{{ $t('LuckyBook.for') }}
							"{{ searchQuery }}"</p>
					</div>
					<ul class="search-ul">
						<li v-for="item in gzt" :key="item.number" class="search-result">
							<div class="number_col">
								<p>{{ item.number }}</p>
							</div>
							<div class="images">
								<img :src="`/imgs/gzt_webp/${item.image} `" :alt="item.content[language]" />
							</div>
							<div class="content">
								<p>{{ item.content[language] }}</p>
							</div>
						</li>
					</ul>
				</div>


				<!--TuaPekKong (Qian)-->
				<div id="TuaPekKongQian" class="container tab-pane fade">
					<div class="search-message">
						<p>{{ $t('LuckyBook.Found') }}
							{{ qzt.length }}
							{{ $t('LuckyBook.result') }}
							{{ qzt.length !== 1 ?
								'' : '' }}
							{{ $t('LuckyBook.for') }}
							"{{ searchQuery }}"</p>
					</div>
					<ul class="search-ul">
						<li v-for="item in qzt" :key="item.number" class="search-result">
							<div class="number_col">
								<p>{{ item.number }}</p>
							</div>
							<div class="images">
								<img :src="`/imgs/qzt_webp/${item.image} `" :alt="item.content[language]" />
							</div>
							<div class="content">
								<p>{{ item.content[language] }}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!--entry TuaPekKongWan & GuanYinMa & TuaPkeKong Qian-->
		<div v-else>
			<div class="Laptop-LB-view">
				<div class="row img">

					<!-- Tua Pek Kong (Wan) -->
					<div class="hover_container col-12 col-sm-12 col-md-6 col-lg-4">
						<div class="book_container">
							<div class="book_card_S" />
							<div class="book_img_container">
								<router-link to="/lucky-book/tuapekkongwan">
									<img class="lucky_book_title" src="/image/TuaPekKongWanZi.webp"
										alt="Tua Pek Kong Wan Zi">
								</router-link>
								<router-link to="/lucky-book/tuapekkongwan">
									<img class="luck_book_img" src="/image/TuaPekKongWan.svg" alt="Tua Pek Kong">
								</router-link>
							</div>
							<div class="book_text_container">
								<div class="top_text_container">
									<router-link to="/lucky-book/tuapekkongwan">
										{{ $t('LuckyBook.Tua Pek Kong (Wan) Dictionary') }}
									</router-link>
								</div>
								<div class="btm_text_container">
									<router-link to="/lucky-book/tuapekkongwan">
										(WZT)
									</router-link>
								</div>
							</div>
						</div>
						<router-link to="/lucky-book/tuapekkongwan">
							<div class="btn_col">
								<button class="btn_bg">
									{{ $t('LuckyBook.Enter') }}
								</button>
							</div>
						</router-link>
					</div>

					<!-- Guan Yin Ma -->
					<div class="hover_container col-12 col-sm-12 col-md-6 col-lg-4">
						<div class="book_container">
							<div class="book_card_S" />
							<div class="book_img_container">
								<router-link to="/lucky-book/guanyin">
									<img class="lucky_book_title" src="/image/GuanYinQianZi.webp"
										alt="Guan Yin Qian Zi">
								</router-link>
								<router-link to="/lucky-book/guanyin">
									<img class="luck_book_img" src="/image/GuanYinQian.svg" alt="Guan Yin Qian">
								</router-link>
							</div>
							<div class="book_text_container">
								<div class="top_text_container">
									<router-link to="/lucky-book/guanyin">
										{{ $t('LuckyBook.Guan Yin Ma Dictionary') }}
									</router-link>
								</div>
								<div class="btm_text_container">
									<router-link to="/lucky-book/guanyin">
										(GZT)
									</router-link>
								</div>
							</div>
						</div>
						<router-link to="/lucky-book/guanyin">
							<div class="btn_col">
								<button class="btn_bg">
									{{ $t('LuckyBook.Enter') }}
								</button>
							</div>
						</router-link>
					</div>

					<!-- Tua Pek Kong (Qian) -->
					<div class="hover_container col-12 col-sm-12 col-md-6 col-lg-4">
						<div class="book_container">
							<div class="book_card_S" />
							<div class="book_img_container">
								<router-link to="/lucky-book/tuapekkongqian">
									<img class="lucky_book_title" src="/image/TuaPekKongQianZi.webp"
										alt="Guan Yin Qian Zi">
								</router-link>
								<router-link to="/lucky-book/tuapekkongqian">
									<img class="luck_book_img" src="/image/TuaPekKongQian.svg" alt="Guan Yin Qian">
								</router-link>
							</div>
							<div class="book_text_container">
								<div class="top_text_container">
									<router-link to="/lucky-book/tuapekkongqian">
										{{ $t('LuckyBook.Tua Pek Kong (Qian) Dictionary') }}
									</router-link>
								</div>
								<div class="btm_text_container">
									<router-link to="/lucky-book/tuapekkongqian">
										(QZT)
									</router-link>
								</div>
							</div>
						</div>
						<router-link to="/lucky-book/tuapekkongqian">
							<div class="btn_col">
								<button class="btn_bg">
									{{ $t('LuckyBook.Enter') }}
								</button>
							</div>
						</router-link>
					</div>
				</div>
			</div>


			<div class="tablet-mobile-LB-view" style="display: none">
				<div class="row img-TB">
					<!-- Tua Pek Kong (Wan) -->
					<div class="col-12 col-sm-12 col-md-6 col-lg-4">
						<div class="lucky_col">
							<div class="wanzititle_col">
								<router-link to="/lucky-book/tuapekkongwan">
									<img class="wanzititle" src="/image/TuaPekKongWanZi.webp" />
									<img width="65%" src="/image/TuaPekKongWan.svg" @load="onWanLoaded" />
								</router-link>
							</div>
							<div class=" text">
								<router-link to="/lucky-book/tuapekkongwan" class="text">
									{{ $t('LuckyBook.Tua Pek Kong (Wan) Dictionary') }}
								</router-link>
							</div>
							<div class="text2">
								<router-link to="/lucky-book/tuapekkongwan" class="text2">(WZT)</router-link>
							</div>
						</div>
						<br />
						<div class="btn_col">
							<button class="btn_bg">
								<router-link to="/lucky-book/tuapekkongwan">
									{{ $t('LuckyBook.Enter') }}
								</router-link>
							</button>
						</div>
						<br />
					</div>

					<!-- Guan Yin Ma -->
					<div class="col-12 col-sm-12 col-md-6 col-lg-4">
						<div class="lucky_col">
							<div class="wanzititle_col">
								<router-link to="/lucky-book/guanyin">
									<img class="wanzititle" src="/image/GuanYinQianZi.webp" />
									<img width="65%" src="/image/GuanYinQian.svg" />
								</router-link>
							</div>
							<div class="text">
								<router-link to="/lucky-book/guanyin" class="text">
									{{ $t('LuckyBook.Guan Yin Ma Dictionary') }}
								</router-link>
							</div>
							<div class="text2">
								<router-link to="/lucky-book/guanyin" class="text2">(GZT)</router-link>
							</div>
						</div>
						<br />
						<div class="btn_col">
							<button class="btn_bg">
								<router-link to="/lucky-book/guanyin">
									{{ $t('LuckyBook.Enter') }}
								</router-link>
							</button>
						</div>
						<br />
					</div>

					<!-- Tua Pek Kong (Qian) -->
					<div class="col-12 col-sm-12 col-md-6 col-lg-4">
						<div class="lucky_col">
							<div class="wanzititle_col">
								<router-link to="/lucky-book/tuapekkongqian">
									<img class="wanzititle" src="/image/TuaPekKongQianZi.webp" />
									<img width="65%" src="/image/TuaPekKongQian.svg" />
								</router-link>
							</div>
							<div class="text">
								<router-link to="/lucky-book/tuapekkongqian" class="text">
									{{ $t('LuckyBook.Tua Pek Kong (Qian) Dictionary') }}
								</router-link>
							</div>
							<div class="text2">
								<router-link to="/lucky-book/tuapekkongqian" class="text2">(QZT)</router-link>
							</div>
						</div>
						<br />
						<div class="btn_col">
							<button class="btn_bg">
								<router-link to="/lucky-book/tuapekkongqian">
									{{ $t('LuckyBook.Enter') }}
								</router-link>
							</button>
						</div>
						<br />
					</div>
				</div>
			</div>
		</div>

		<!--go up botton-->
		<div class="go_up_btn">
			<a @click.prevent="scrollToTop" :class="{ 'scroll-icon': true, 'show': showIcon, 'hide': !showIcon }"
				href="#">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
					class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
					<path
						d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
				</svg>
			</a>
		</div>
	</div>

</template>

<script>
import qztData from '../assets/data/qzt.json';
import wztData from '../assets/data/wzt.json';
import gztdata from '../assets/data/gzt.json';
import TopBar from '/src/components/topbar.vue';
import ContentMenu from '@/components/content-menu.vue'
import { useI18n } from 'vue-i18n';

export default {
	components: {
		ContentMenu,
		TopBar
	},
	name: 'LuckyBook',
	setup() {
		const { t, locale } = useI18n(); // Get the i18n instance

		return {
			t,
			locale
		};
	},
	data() {
		return {
			searchQuery: '',
			showSearchResults: false,
			showCloseButton: false,
			activeTab: 'WZT',
			wanLoaded: false,
			showIcon: false,
			scrollTimeout: null,
			//showTuaPekKongQian: false, // Boolean state for showing TuaPekKong (Qian) component
			allData: [],
			filteredData: [],
			filteredDataWZT: [],
			filteredDataGZT: [],
			filteredDataQZT: [],
			showIcon: false,
			scrollTimeout: null,
			wzt: wztData,
			qzt: qztData,
			gzt: gztdata

		};
	},
	computed: {
		language() {
			return this.$i18n.locale;
		},
	},

	methods: {
		handleScroll() {
			// 如果已经有计时器，清除它
			if (this.scrollTimeout) {
				clearTimeout(this.scrollTimeout);
			}

			// 显示图标
			this.showIcon = true;

			// 在5秒后隐藏图标
			this.scrollTimeout = setTimeout(() => {
				this.showIcon = false;
			}, 2000);
		},
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		},
		async performSearch() {
			this.showSearchResults = this.searchQuery.trim().length > 0;

			if (this.showSearchResults) {
				// // Load data from JSON files
				// const wztData = await fetch('/data/wzt.json').then(response => response.json());
				// const gztData = await fetch('/data/gzt.json').then(response => response.json());
				// const qztData = await fetch('/data/qzt.json').then(response => response.json());



				// Filter data based on search query
				this.wzt = wztData.filter(item =>
					item.number.includes(this.searchQuery) ||
					item.content.en.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
					item.content.zh.includes(this.searchQuery) ||
					item.content.ms.toLowerCase().includes(this.searchQuery.toLowerCase())
				);
				this.gzt = gztdata.filter(item =>
					item.number.includes(this.searchQuery) ||
					item.content.en.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
					item.content.zh.includes(this.searchQuery) ||
					item.content.ms.toLowerCase().includes(this.searchQuery.toLowerCase())
				);
				this.qzt = qztData.filter(item =>
					item.number.includes(this.searchQuery) ||
					item.content.en.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
					item.content.zh.includes(this.searchQuery) ||
					item.content.ms.toLowerCase().includes(this.searchQuery.toLowerCase())
				);
			}
		},
		onWanLoaded() {
			this.wanLoaded = true;
		},
		clearSearch() {
			this.showSearchResults = false;
			this.searchQuery = '';
			this.showCloseButton = false;
		},
		changeTab(tab) {
			this.activeTab = tab;
		},

	},
	mounted() {
		// 监听滚动事件
		window.addEventListener('scroll', this.handleScroll);
		this.intervalId = setInterval(this.checkTime, 1000);
	},
	beforeDestroy() {
		// 移除滚动事件监听
		window.removeEventListener('scroll', this.handleScroll);
		clearInterval(this.intervalId);
	},
};



</script>

<style scoped>
.title_col {
	text-align: -webkit-center;
	margin-top: 73px;
}

@media screen and (max-width:450px) {
	.number_col {
		width: 60%;
	}

}

@media screen and (max-width:768px) {
	.title_col {
		margin-top: 10px;
	}

	.title {
		margin-top: 10px !important;
	}
}

.luckybook_col {
	width: 100%;
	text-align: -webkit-center;
	background: rgb(255, 255, 255);
	border-top-right-radius: 25px;
	border-top-left-radius: 25px;
	display: flex;
}

@media (min-width: 1024px) {
	.luckybook_col {
		width: 70%;
		display: flex;
	}
}

.title {
	background-color: #6EC1E4;
	color: white;
	height: 130px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 35px;
	border-bottom-right-radius: 35px;
	font-weight: bold;
	font-size: 30px;
	margin-top: 73px;
}

@media (min-width:1200px) {

	.title {
		width: 70%;
	}
}



.search-message {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
}

.search-result {
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 10px;
	background-color: white;
	/* padding-bottom: 10px; */
	height: 100%;
	text-align: -webkit-center;
	width: 100%;
	place-self: center;
	border-radius: 5px;
	align-content: start;
	box-shadow: 0px 2px 2px 2px #989696;
}

.number_col {
	color: rgb(0, 0, 0);
	border-style: solid;
	border-radius: 50px;
	width: 40%;
	text-align: -webkit-center;
	font-weight: bold;
	border-width: 1px;
	border-color: rgb(198, 198, 198);
}

@media screen and (max-width:426px) {
	.number_col {
		width: 80%;
	}

}

@media (min-width:600px) {
	.number_col {
		width: 60%;
	}

}

.item-container {
	padding-top: 30px;
	background-color: white;
	height: 250px;
	text-align: -webkit-center;
	width: 100%;
	border-radius: 5px;
	align-content: start;
	box-shadow: 0px 2px 2px 2px #989696;
}

.search_btn {
	padding: 10px 20px;
	border: none;
	background-color: #6EC1E4;
	color: white;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
	white-space: nowrap;
}

.close_btn {
	color: #6EC1E4;
	border: none;
	background-color: white;
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	background: none;
	border: none;
	cursor: pointer;


}

.back-button {
	position: absolute;
	left: -40px;
}

@media screen and (max-width: 1000px) {
	.back-button {
		position: relative;
		margin-right: 10px;
		left: 0;
	}
}

.search_input {
	width: 70%;
	padding: 10px;
	margin-right: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}

@media screen and (max-width: 321px) {
	.search_input {
		font-size: 13px;
	}
}

.search-result img {
	max-width: 100px;
}

.book_col {

	width: 80%;
	text-align: -webkit-center;
}


.lucky {
	text-align: -webkit-center;
}

.btn_bg {
	text-align: center;
	background-color: #ffb802;
	color: #822700;
	font-weight: bold;
	width: 50%;
	border-radius: 60px;
	padding: 10px;
	border: none;
	font-size: 20px;
}

.btn_bg a {
	text-decoration: none;
	color: #822700;
}

.btn_col {
	text-align: center;
}

.search_col {
	justify-content: center;
	display: flex;
	padding-top: 10px;
	width: 88%;
	padding-bottom: 10px;
	align-items: center;
}

.item-content {
	width: 100px;
}

.search-ul {
	padding: 0px;
	gap: 1.0rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.nav-tabs {
	gap: 0.3rem;
}

.nav-tabs .nav-link.active {
	background-color: #6EC1E4;
	color: white;
	font-weight: bolder;

}

.nav-tabs .nav-link {
	color: grey;
	font-weight: bolder;
	background-color: gainsboro;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
	border-bottom: 2px solid #6EC1E4;
}

.nav-tabs {
	width: 95% !important;
}

@media screen and (min-width:1200px) {
	.nav-tabs {
		width: 70% !important;
	}
}

.nav-item {
	width: 80px;
}

.nav-pills {
	gap: 2.0rem;
}

p {
	margin: 0px;
}

.col {
	flex: 1;
	margin: 10px;
	text-align: -webkit-center;
	padding-left: 0px;
	padding-right: 0px;
}

.search_title {
	background-color: #6EC1E4;
	color: white;
	text-align: center;
	width: 75%;
	border-radius: 20px;

}

@media screen and (min-width:1200px) {
	.search-ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr) !important;
		width: 68%;
	}
}

@media screen and (min-width:768px) {
	.search_col {
		width: 50%;
	}

	.search-ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
}


@media screen and (max-width:450px) {

	.search_title {
		width: 100%;
	}



	.big_col {
		padding: 10px;
	}

}

.big_col {
	text-align: -webkit-center;
}

.input-wrapper {
	position: relative;
	display: flex;
	align-items: center;
}

.input-container {
	position: relative;
	display: inline-block;
}

.search_input {
	flex: 1;
	padding-right: 30px;
	height: 100%;
}

.go_up_btn {
	position: fixed;
	right: 50px;
	bottom: 15px;
	background-color: #ffffff;
	border-radius: 50px;
	opacity: 0.8;
	color: #6EC1E4;

}

.go_up_btn :hover {
	color: #6EC1E4;
	opacity: 1;
}

.go_up_btn a {
	color: #6EC1E4;
}

@media screen and (min-width:1440px) {
	.go_up_btn {
		right: 253px;
	}
}

@media screen and (min-width:2560px) {
	.go_up_btn {
		right: 800px;
	}
}

.scroll-icon {
	position: fixed;
	bottom: 20px;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
}

.scroll-icon.show {
	opacity: 1;
	visibility: visible;
	/* 设置为可见 */
}

.scroll-icon.hide {
	opacity: 0.5;
	visibility: visible;
	/* 设置为不可见 */
}

.scroll-icon.fade-out {
	opacity: 0.5;
}

.images {
	padding-top: 10px;
}

.content {
	width: 100%;
	font-size: 14px;
	padding-top: 5px;
}

@media screen and (max-width:500px) {
	.content {
		font-size: 12px !important;
	}
}

@media screen and (max-width: 769px) {
	.Topbar-mobile-view {
		display: none;
	}
}

.Content-mobile-view {
	position: absolute;
	top: -50px;
}

@media screen and (min-width: 769px) {
	.Content-mobile-view {
		display: none;
	}
}

.img {
	margin-inline: 206px;
	margin-top: 85px;
	margin-bottom: 20px;
}

@media screen and (max-width: 1030px) {
	.img {
		margin-inline: 100px;
	}
}

@media screen and (max-width: 769px) {
	.img {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-inline: 20px;
		gap: 120px;
	}
}

.book_container {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin-bottom: 20px;
	height: 350px;
}

.book_card_S {
	width: 235px;
	height: 240px;
	background-color: #6EC1E4;
	border-radius: 35px;
	position: absolute;
	bottom: 0;
	transition: all 0.5s ease;
	/* Smooth transition */
}

.book_card_L {
	width: 235px;
	height: 370px;
	background-color: #6EC1E4;
	border-radius: 35px;
	position: absolute;
	bottom: 0;
	transition: all 0.5s ease;
	/* Smooth transition */
}

.book_img_container {
	width: 90%;
	position: absolute;
	top: -60px;
}

.book_img_container a {
	display: flex;
	justify-content: center;
}

.lucky_book_title {
	width: 100%;
	position: absolute;
	top: 0;
}

.luck_book_img {
	width: 90%;
}

.book_text_container {
	text-align: center;
	width: 100%;
	position: absolute;
	bottom: 15px;
}

.book_text_container a {
	text-decoration: none;
	color: white;
	font-size: 14px;
	font-weight: 700;
}

/* Initial States */
.lucky_book_title,
.book_text_container {
	opacity: 0;
	transition: all 0.5s ease;
}

.book_text_container {
	transform: translateY(-20px);
}

/* Hover States */
.hover_container:hover .lucky_book_title {
	opacity: 1;
	transition: opacity 0.5s ease;
}

.hover_container:hover .book_text_container {
	opacity: 1;
	transform: translateY(0);
	transition: opacity 0.5s ease, transform 0.5s ease;
}

.hover_container:hover .book_card_S {
	height: 370px;
	/* Change height to .book_card_L's height */
	transition: all 0.5s ease;
}

@media screen and (max-width: 1400px) {
	.Laptop-LB-view {
		display: none;
	}

	.tablet-mobile-LB-view {
		display: flex !important;
	}
}

.img-TB {
	text-align: -webkit-center;
	place-content: center;
	margin-inline: 0px;
}

@media screen and (min-width:1200px) {
	.img-TB {
		margin-inline: 200px !important;
	}
}

.wanzititle_col {
	position: relative;
}

.wanzititle {
	width: 65%;
	position: absolute;
}

.text {
	text-align: center;
	text-decoration: none;
	color: white;
	font-weight: bold;
	font-size: 12px;
	margin-top: 10px;
	padding: 0 10px;
	white-space: nowrap;
}

.text2 {
	text-align: center;
	text-decoration: none;
	color: white;
	font-weight: bold;
	font-size: 14px;
	padding-bottom: 10px;
}

.lucky_col {
	background-color: #6EC1E4;
	text-align: center;
	padding-top: 10px;
	width: 95%;
	border-radius: 10px;
}
</style>
