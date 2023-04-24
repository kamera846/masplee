<template>
    <footer>
        <div class="container py-7">
            <div class="d-md-flex align-items-center justify-content-between">
                <p class="mb-2 mb-lg-0">© 2023 {{ settings?.title }}. All rights reserved.</p>
                <nav class="nav social social-muted mb-0 text-md-end">
                    <a v-for="(item, index) in socmed" :key="'socmed-' + index" :href="item?.url"><i :class="'uil' + item?.icon"></i></a>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script>
import { WEBSETTINGS, SOCMED } from '@/commons/constants/web-setting.js'

export default {
    computed: {
        socmed() {
            return SOCMED
        },
        settings() {
            return WEBSETTINGS
        }
    }
}
</script>