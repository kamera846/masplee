<template>
	<div class="content-wrapper">
		<HeaderSection />

		<Nuxt />

		<FooterSection />
        
        <div class="progress-wrap">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"></path>
            </svg>
        </div>
	</div>
</template>

<script>
import { WEBSETTINGS } from "@/commons/constants/web-setting.min.js";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
	head() {
		const title = this.capitalize(WEBSETTINGS?.title)
		return {
			title: title + ' | Personal Website'
		}
	},

	components: { HeaderSection, FooterSection },

	methods: {
		capitalize(str) {
			const arr = str.split(" ");
			for (var i = 0; i < arr.length; i++) {
				arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

			}
			const str2 = arr.join(" ");

			return str2
		}
	},
};
</script>