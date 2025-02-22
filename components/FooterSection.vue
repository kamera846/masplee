<template>
	<footer id="contact" class="bg-gray">
        <div class="overflow-hidden">
            <div class="divider text-gray bg-light mx-n2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="currentColor" d="M1260.2,37.86c-60-10-120-20.07-180-16.76-60,3.71-120,19.77-180,18.47-60-1.71-120-21.78-180-31.82s-120-10-180-1.7c-60,8.73-120,24.79-180,28.5-60,3.31-120-6.73-180-11.74s-120-5-150-5H0V100H1440V49.63C1380.07,57.9,1320.13,47.88,1260.2,37.86Z"/></svg>
            </div>
        </div>
		<div class="container py-10 py-md-14">
			<div class="text-center text-break">
				<nav class="nav social social-muted mb-0 justify-content-center">
					<a
						v-for="(item, index) in socmed"
						:key="'socmed-' + index"
						:href="item?.url"
						><i :class="'fs-25 lh-sm uil' + item?.icon"></i
					></a>
				</nav>
                <a :href="`mailto:${ settings?.mail }`" class="fs-22 lh-sm hover-2 leaf">{{ settings?.mail }}</a>
				<p class="lead fs-22 lh-sm">
					© 2023 <span class="text-capitalize">{{ settings?.title }}</span>
				</p>
			</div>
		</div>
	</footer>
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