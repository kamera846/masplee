<template>
	<section id="portfolios" class="wrapper bg-gradient-gray">
		<div class="container py-10 py-md-14">
			<div class="row text-center">
				<div class="col-xl-10 mx-auto mb-10 px-xxl-15">
					<h3 class="display-4">
						All My Portfolios
					</h3>
				</div>
			</div>

			<div class="position-relative">
				<div class="shape bg-dot primary rellax w-17 h-20" data-rellax-speed="1" style="top: 0; left: -1.7rem;"></div>
				<div class="portfolio blog grid-view mb-6" data-margin="0" data-dots="true" data-items-xl="3" data-items-md="2"
					data-items-xs="1">
					<div class="mx-auto p-0">
						<div class="row">
							<div v-for="(item, idx) in portfolio" :key="'portfolio-' + idx"
								class="col-12 col-md-6 col-lg-4 cursor-default">
								<div class="item-inner h-100">
									<article class="h-100">
										<div class="card h-100">
											<figure class="card-img-top overlay overlay-1 hover-scale">
												<a v-if="item?.available === false" href="#!"><img :src="item?.cover" :alt="item?.name" /></a>
												<a v-else-if="item?.previewCover" :href="item?.previewCover" data-glightbox
													:data-gallery="'portfolio-group-cover-' + idx"><img :src="item?.cover"
														:alt="item?.name" /></a>
												<a v-else :href="item?.url" target="_blank"><img :src="item?.cover" :alt="item?.name" /></a>
												<figcaption>
													<h5 class="from-top mb-0">{{ item?.available === false ? 'Not Available' : item?.previewCover
														? 'Preview' : 'View Site' }}</h5>
												</figcaption>
											</figure>
											<div class="card-body">
												<div class="post-header">
													<div class="post-category text-line">
														<a class="cursor-default" rel="category">{{ item?.tag }}</a>
													</div>
													<h2 class="post-title text-limit-1 h3 mt-1 mb-0">
														<a v-if="item?.available === false" class="link-dark" href="#!">{{ item?.name }}</a>
														<a v-else-if="item?.url" class="link-dark"
															:href="!item?.url ? item?.previewCover : item?.url" target="_blank">{{ item?.name }}</a>
														<a v-else class="link-dark" :href="item?.previewCover" data-glightbox
															:data-gallery="'portfolio-group-title-' + idx">{{ item?.name }}</a>
													</h2>
													<!-- STORE BUTTON -->
													<div v-if="item?.available" class="d-flex align-items-center gap-3 mt-3">
														<!-- PLAYSTORE -->
														<a v-if="item?.playstoreUrl" :href="item?.playstoreUrl" target="_blank" class="store-btn">
															<img src="/assets/img/icons/playstore.png" alt="Get it on Google Play"
																class="store-badge" />
														</a>

														<!-- APPSTORE -->
														<a v-if="item?.appstoreUrl" :href="item?.appstoreUrl" target="_blank" class="store-btn">
															<img src="/assets/img/icons/appstore.png" alt="Download on the App Store"
																class="store-badge" />
														</a>

														<!-- Preview -->
														<a v-if="item?.previewCover" :href="item?.previewCover" data-glightbox
															:data-gallery="'portfolio-group-title-' + idx" class="store-btn">
															<img src="/assets/img/icons/picture.png" alt="Preview Image" class="store-badge" />
														</a>

														<!-- Site -->
														<a v-if="item?.url" :href="item?.url" target="_blank" class="store-btn">
															<img src="/assets/img/icons/link.png" alt="Open Website" class="store-badge" />
														</a>
													</div>
													<p v-if="item?.available === false" class="text-danger mb-3" style="font-size: 14px;"> Sorry,
														not available for now</p>
												</div>
											</div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { PORTFOLIO } from "@/commons/constants/list-item.min.js"

export default {
	computed: {
		portfolio() {
			return PORTFOLIO
		}
	},

	head() {
		return {
			script: [
				{ hid: "extscript", src: "/assets/js/plugins.js", body: true, defer: true },
				{ hid: "extscript", src: "/assets/js/theme.js", body: true, defer: true },
			]
		}
	},
}
</script>
<style scoped>
.store-btn {
	width: 42px;
	height: 42px;
	border: 1px solid #dcdcdc;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	transition: 0.3s ease;
}

.store-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	border-color: #999;
}

.store-badge {
	width: 20px;
	height: 20px;
	object-fit: contain;
}
</style>