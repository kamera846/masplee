<template>
	<section class="wrapper bg-light">
        <hr class="double my-8" />
		<div class="container py-10 py-md-14">
            <div class="row text-center">
				<div class="col-xl-10 mx-auto mb-10 px-xxl-15">
					<h3 class="display-4">Framework That I Have Used</h3>
				</div>
				<!-- /column -->
			</div>
			<!-- /.row -->
			<div class="row gy-6">
				<div v-for="(item, index) in frameworks" :key="'skill-'+index" class="col-12 col-md-6 col-lg-4">
					<a href="#!" :class="`card shadow-lg lift h-100 ${ item?.value >= 90 ? 'text-'+item?.color : 'text-dark' }`">
						<div class="card-body p-5 d-flex flex-row align-items-center">
							<div>
								<img class="avatar w-10 h-10 me-4" :src="item?.icon" :alt="item?.name" />
							</div>
							<div>
								<h4 class="mb-0">{{ item?.name }}</h4>
								<span
									class="badge bg-pale-green text-green rounded py-1"
									>{{ item?.value }}</span
								>
							</div>
						</div>
					</a>
				</div>
				<!--/column -->
			</div>
			<!--/.row -->
		</div>
		<!-- /.container -->
        <div class="overflow-hidden">
            <div class="divider text-gray mx-n2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="currentColor" d="M1260.2,37.86c-60-10-120-20.07-180-16.76-60,3.71-120,19.77-180,18.47-60-1.71-120-21.78-180-31.82s-120-10-180-1.7c-60,8.73-120,24.79-180,28.5-60,3.31-120-6.73-180-11.74s-120-5-150-5H0V100H1440V49.63C1380.07,57.9,1320.13,47.88,1260.2,37.86Z"/></svg>
            </div>
        </div>
	</section>
	<!-- /section -->
</template>

<script>
import { FRAMEWORKS } from "@/commons/constants/list-item.js";

export default {
    computed: {
        frameworks() {
            return FRAMEWORKS
        }
    },
}
</script>

<style scoped>
.avatar {
    border-radius: 0;
    object-fit: contain;
}
.progress-title {
    line-height: 100%;
}
</style>