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
import { WEBSETTINGS } from "@/commons/constants/web-setting.js";
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

	mounted() {
		setTimeout(() => {
			this.setExternalJS();
		}, 1000);
	},

	methods: {
		setExternalJS() {
			let plugin = document.getElementById("pluginsJs");
			let theme = document.getElementById("themeJs");
			let nav = document.getElementsByClassName("navbar-clone");

			let externalPlugin = document.createElement("script");
			externalPlugin.setAttribute("id", "pluginsJs");
			externalPlugin.setAttribute("src", "/assets/js/plugins.js");
			externalPlugin.setAttribute("defer", true);

			let externalTheme = document.createElement("script");
			externalTheme.setAttribute("id", "themeJs");
			externalTheme.setAttribute("src", "/assets/js/theme.js");
			externalTheme.setAttribute("defer", true);

			if (plugin) plugin.remove();
			if (theme) theme.remove();

			document.body.appendChild(externalPlugin);
			document.body.appendChild(externalTheme);

			setTimeout(() => {
				for (let index = 0; index < nav.length; index++) {
					if (index != nav.length - 1) {
						var element =
							document.getElementsByClassName("navbar-clone")[
								index
							];
						element.remove();
					}
				}
			}, 1000);
		},
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