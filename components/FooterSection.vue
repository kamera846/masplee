<template>
	<footer id="contact" class="bg-gray">
		<div class="container py-10 py-md-14">
			<div class="text-center">
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