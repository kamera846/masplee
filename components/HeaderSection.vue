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
									<a class="nav-link" href="/portfolios"
										>Portfolio</a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/#skills"
										>Skills</a
									>
								</li>
							</ul>
							<!-- /.navbar-nav -->
							<div class="offcanvas-footer d-lg-none mt-8">
								<div>
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