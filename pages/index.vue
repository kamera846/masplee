<template>
	<div>
        <HeroSection />
        <LatestProjectSection />
	    <SkillSection />
	    <FrameworkSection />
    </div>
</template>

<script>
import HeroSection from "~/components/HeroSection.vue";
import LatestProjectSection from "~/components/LatestProjectSection.vue";
import SkillSection from "~/components/SkillSection.vue";
import FrameworkSection from "~/components/FrameworkSection.vue";

export default {
	name: "HomePage",
	components: { HeroSection, LatestProjectSection, SkillSection, FrameworkSection },
	head() {
		return {
			script: [
				{ hid: "extscript", src: "/assets/js/plugins.js", body: true, defer: true },
            	{ hid: "extscript", src: "/assets/js/theme.js", body: true, defer: true },
			]
		}
	},
};
</script>
