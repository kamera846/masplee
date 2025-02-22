<template>
	<section id="latest-works" class="wrapper bg-light">
		<div class="container py-10 py-md-14">
			<div v-if="isMore" class="d-flex align-items-center justify-content-between mb-10">
				<h3 class="display-4">
					Latest Work
				</h3>
				<a href="/portfolios" class="hover">See More</a>
			</div>
			<div v-else class="row text-center">
				<div class="col-xl-10 mx-auto mb-10 px-xxl-15">
					<h3 class="display-4">
						Latest Work
					</h3>
				</div>
			</div>

			<div class="position-relative">
				<div class="shape bg-dot primary rellax w-17 h-20" data-rellax-speed="1" style="top: 0; left: -1.7rem;"></div>
				<div class="portfolio swiper-container dots-closer blog grid-view mb-6" data-margin="0" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
					<div class="swiper">
						<div class="swiper-wrapper">
							<div v-for="(item, idx) in portfolio" :key="'portfolio-'+idx" class="swiper-slide cursor-default">
								<div class="item-inner">
									<article>
										<div class="card">
											<figure class="card-img-top overlay overlay-1 hover-scale">
												<a v-if="item?.available === false" href="#!"><img :src="item?.cover" :alt="item?.name" /></a>
												<a v-else-if="item?.url" :href="item?.url" target="_blank"><img :src="item?.cover" :alt="item?.name" /></a>
												<a v-else :href="item?.previewCover" data-glightbox :data-gallery="'portfolio-group-cover-'+idx"><img :src="item?.cover" :alt="item?.name" /></a>
												<figcaption>
													<h5 class="from-top mb-0">{{ item?.available === false ? 'Not Available' : item?.url ? 'View Site' : 'Preview' }}</h5>
												</figcaption>
											</figure>
											<div class="card-body">
												<div class="post-header">
													<div class="post-category text-line">
														<a class="cursor-default" rel="category">{{ item?.tag }}</a>
													</div>
													<h2 class="post-title text-limit-1 h3 mt-1 mb-0">
														<a v-if="item?.available === false" class="link-dark" href="#!">{{ item?.name }}</a>
														<a v-else-if="item?.url" class="link-dark" :href="!item?.url ? item?.previewCover : item?.url" target="_blank">{{ item?.name }}</a>
														<a v-else class="link-dark" :href="item?.previewCover" data-glightbox :data-gallery="'portfolio-group-title-'+idx">{{ item?.name }}</a>
													</h2>
													<p v-if="item?.available === false" class="text-danger mb-3" style="font-size: 14px;"> Sorry, not available for now</p>
													<div v-else class="mb-3"></div>
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
		isMore() {
			var limitedList = [...PORTFOLIO]
			if (limitedList?.length > 5) return true
            return false
		},
        portfolio() {
			var limitedList = [...PORTFOLIO]
			if (limitedList?.length > 5) limitedList.splice(5, limitedList?.length - 5)
            return limitedList
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