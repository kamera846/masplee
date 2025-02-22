<template>
	<header class="wrapper bg-gray">
		<nav class="navbar navbar-expand-lg fancy navbar-light navbar-bg-light">
			<div class="container">
				<div
					class="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center"
				>
					<div class="navbar-brand w-100">
						<a href="/">
							<img src="/assets/img/logo-dark.webp" alt="Logo Dark" class="img-logo">
						</a>
					</div>
					<div
						class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
					>
						<div class="offcanvas-header d-lg-none">
							<a href="/">
								<img src="/assets/img/logo-light.webp" alt="Logo Ligh" class="img-logo">
							</a>
							<button
								type="button"
								class="btn-close btn-close-white"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div
							class="offcanvas-body ms-lg-auto d-flex flex-column h-100"
						>
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" href="/#about"
										>About</a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link d-flex align-items-center gap-2" href="/portfolios"
										>Portfolios
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/#skills"
										>Skills</a
									>
								</li>
							</ul>
							<!-- /.navbar-nav -->
							<div class="offcanvas-footer d-lg-none mt-8">
								<div class="text-break">
									<a
										:href="`mailto:${ settings?.mail }`"
										class="link-inverse"
										>{{ settings?.mail }}</a
									>
									<br />
									<!-- <a
										href="tel:+62895636998639"
										class="link-inverse"
										>0895636998639</a
									>
									<br /> -->
									<nav class="nav social social-white">
										<a
											v-for="(item, index) in socmed"
											:key="'socmed-' + index"
											:href="item?.url"
											><i :class="'uil' + item?.icon"></i
										></a>
									</nav>
									<!-- /.social -->
								</div>
							</div>
							<!-- /.offcanvas-footer -->
						</div>
						<!-- /.offcanvas-body -->
					</div>
					<!-- /.navbar-collapse -->
					<div class="navbar-other w-100 d-flex ms-auto">
						<ul
							class="navbar-nav flex-row align-items-center ms-auto"
						>
							<li class="nav-item d-none d-lg-flex">
								<nav
									class="nav social social-muted justify-content-end text-end"
								>
									<a
										v-for="(item, index) in socmed"
										:key="'socmed-' + index"
										:href="item?.url"
										><i :class="'uil' + item?.icon"></i
									></a>
								</nav>
								<!-- /.social -->
							</li>
							<li class="nav-item d-lg-none">
								<button class="hamburger offcanvas-nav-btn">
									<span></span>
								</button>
							</li>
						</ul>
						<!-- /.navbar-nav -->
					</div>
					<!-- /.navbar-other -->
				</div>
				<!-- /.navbar-collapse-wrapper -->
			</div>
			<!-- /.container -->
		</nav>
		<!-- /.navbar -->
	</header>
</template>

<script>
import { WEBSETTINGS, SOCMED } from "@/commons/constants/web-setting.js";

export default {
	computed: {
		socmed() {
			return SOCMED;
		},
		settings() {
			return WEBSETTINGS;
		},
	},
};
</script>