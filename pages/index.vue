<template>
	<div>
        <HeroSection />
        <LatestProjectSectionV2 />
	    <SkillSectionV2 />
	    <FrameworkSection />
    </div>
</template>

<script>
import HeroSection from "~/components/HeroSection.vue";
import LatestProjectSectionV2 from "~/components/LatestProjectSectionV2.vue";
import SkillSectionV2 from "~/components/SkillSectionV2.vue";
import FrameworkSection from "~/components/FrameworkSection.vue";

export default {
	name: "HomePage",
	components: { HeroSection, LatestProjectSectionV2, SkillSectionV2, FrameworkSection },
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
