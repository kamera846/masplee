<template>
	<div>
        <HeroSection />
	    <SkillSection />
    </div>
</template>

<script>
import HeroSection from "~/components/HeroSection.vue";
import SkillSection from "~/components/SkillSection.vue";

export default {
	name: "HomePage",
	components: { HeroSection, SkillSection},
};
</script>
