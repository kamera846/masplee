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
import LatestProjectSectionV2 from "~/components/v2/LatestProjectSectionV2.vue";
import SkillSectionV2 from "~/components/v2/SkillSectionV2.vue";
import FrameworkSection from "~/components/FrameworkSection.vue";

export default {
	name: "HomePage",
	components: { HeroSection, LatestProjectSectionV2, SkillSectionV2, FrameworkSection },
};
</script>
