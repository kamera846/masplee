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

			<div
				class="swiper-container grid-view mb-6"
				data-margin="30"
				data-dots="true"
				data-items-xl="3"
				data-items-md="2"
				data-items-xs="1"
			>
				<div class="swiper">
					<div class="swiper-wrapper">
						<div v-for="(item, idx) in portfolio" :key="'portfolio-'+idx" class="swiper-slide">
							<figure class="rounded mb-6">
								<img
									:src="item?.cover"
									:srcset="item?.cover + ' 2x'"
									alt=""
								/><a
									class="item-link"
									:href="item?.url"
                                    target="_blank"
									><i class="uil uil-link-alt"></i
								></a>
							</figure>
							<div
								class="project-details d-flex justify-content-center flex-column"
							>
								<div class="post-header">
									<h2 class="post-title h3">
										<a
											:href="item?.url"
											class="link-dark"
                                            target="_blank"
											>{{ item?.name }}</a
										>
									</h2>
									<div class="post-category text-ash">
										{{ item?.tag }}
									</div>
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
    max-height: 440px;
}
</style>