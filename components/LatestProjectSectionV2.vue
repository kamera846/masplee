<template>
	<section id="latest-works" class="wrapper bg-light">
		<div class="container py-10 py-md-14">
			<div class="row text-center">
				<div class="col-xl-10 mx-auto mb-10 px-xxl-15">
					<h3 class="display-4">
						Latest Work
					</h3>
				</div>
			</div>

			<div class="position-relative">
				<div class="shape bg-dot primary rellax w-17 h-20" data-rellax-speed="1" style="top: 0; left: -1.7rem;"></div>
				<div class="swiper-container dots-closer blog grid-view mb-6" data-margin="0" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
					<div class="swiper">
						<div class="swiper-wrapper">
							<div v-for="(item, idx) in portfolio" :key="'portfolio-'+idx" class="swiper-slide cursor-default">
								<div class="item-inner">
									<article>
										<div class="card">
											<figure class="card-img-top overlay overlay-1 hover-scale"><a :href="item?.url" target="_blank"> <img :src="item?.cover" :alt="item?.name" /></a>
												<figcaption>
													<h5 class="from-top mb-0">View Site</h5>
												</figcaption>
											</figure>
											<div class="card-body">
												<div class="post-header">
													<div class="post-category text-line">
														<a class="cursor-default" rel="category">{{ item?.tag }}</a>
													</div>
													<h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" :href="item?.url" target="_blank">{{ item?.name }}</a></h2>
												</div>
												<!-- <div class="post-content">
													<p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.</p>
												</div> -->
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
import { PORTFOLIO } from "@/commons/constants/list-item.js"

export default {
    computed: {
        portfolio() {
            return PORTFOLIO
        }
    }
}
</script>

<style scoped>
.swiper-container .swiper figure {
    cursor: default;
}
.swiper-container .swiper img {
    object-fit: cover;
    height: auto !important;
    max-height: 300px;
}
.cursor-default {
	cursor: default;
}
</style>