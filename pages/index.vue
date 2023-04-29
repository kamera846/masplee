<template>
	<div>
        <HeroSection />
	    <SkillSection />
	    <FrameworkSection />
    </div>
</template>

<script>
import HeroSection from "~/components/HeroSection.vue";
import SkillSection from "~/components/SkillSection.vue";
import FrameworkSection from "~/components/FrameworkSection.vue";

export default {
	name: "HomePage",
	components: { HeroSection, SkillSection, FrameworkSection },
};
</script>
