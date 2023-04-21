<template>
    <div class="content-wrapper">

        <HeaderSection />

        <Nuxt />

        <FooterSection />

    </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: { HeaderSection, FooterSection }
}
</script>