<template>
	<div class="content-wrapper">
		<HeaderSection />

		<Nuxt />

		<FooterSection />
	</div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
	head: {
		link: [
			{ rel: "stylesheet", href: "/assets/css/plugins.css" },
			{ rel: "stylesheet", href: "/assets/css/style.css" },
			{ rel: "stylesheet", href: "/assets/css/style.css.map" },
			{ rel: "stylesheet", href: "/assets/css/main.css" },
			{ rel: "stylesheet", href: "/assets/css/fonts/poppins.css" },
			{ rel: "stylesheet", href: "/assets/css/colors/leaf.css" },
		],
		script: [
			{ src: "/assets/js/plugins.js", body: true, defer: true },
			{ src: "/assets/js/theme.js", body: true, defer: true },
		],
	},

	components: { HeaderSection, FooterSection },

	mounted() {
		// setTimeout(() => {
		// 	this.setExternalJS();
		// }, 2000);
	},

	methods: {
		setExternalJS() {
			let plugin = document.getElementById("pluginsJs");
			let theme = document.getElementById("themeJs");
			let nav = document.getElementsByClassName("navbar-clone");

			let externalPlugin = document.createElement("script");
			externalPlugin.setAttribute("id", "pluginsJs");
			externalPlugin.setAttribute("src", "/assets/js/plugins.js");

			let externalTheme = document.createElement("script");
			externalTheme.setAttribute("id", "themeJs");
			externalTheme.setAttribute("src", "/assets/js/theme.js");

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
	},
};
</script>