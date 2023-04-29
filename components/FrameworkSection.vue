<template>
	<section class="wrapper bg-light">
        <hr class="double my-8" />
		<div class="container py-10 py-md-14">
            <div class="row text-center">
				<div class="col-xl-10 mx-auto mb-10 px-xxl-15">
					<h3 class="display-4">Framework That I Have Used</h3>
				</div>
				<!-- /column -->
			</div>
			<!-- /.row -->
			<div class="row gy-6">
				<div v-for="(item, index) in frameworks" :key="'skill-'+index" class="col-12 col-md-6 col-lg-4">
					<a href="#!" :class="`card shadow-lg lift h-100 ${ item?.value >= 90 ? 'text-'+item?.color : 'text-dark' }`">
						<div class="card-body p-5 d-flex flex-row align-items-center">
							<div>
								<img class="avatar w-10 h-10 me-4" :src="item?.icon" :alt="item?.name" />
							</div>
							<div>
								<span
									class="badge bg-pale-green text-green rounded py-1"
									>{{ item?.value }}</span
								>
								<h4 class="mb-1">{{ item?.name }}</h4>
							</div>
						</div>
					</a>
				</div>
				<!--/column -->
			</div>
			<!--/.row -->
		</div>
		<!-- /.container -->
	</section>
	<!-- /section -->
</template>

<script>
export default {
    computed: {
        frameworks() {
            return [
                {
                    icon: "/assets/img/icons/nuxtjs.png",
                    name: "Nuxt Js",
                    value: "2 Tahun",
                    color: "red"
                },
                {
                    icon: "/assets/img/icons/bootstrap.png",
                    name: "Bootstrap",
                    value: "2 Tahun",
                    color: "blue"
                },
                {
                    icon: "/assets/img/icons/android-studio.png",
                    name: "Android Studio",
                    value: "1 Tahun",
                    color: "pink"
                },
                {
                    icon: "/assets/img/icons/laravel.png",
                    name: "Laravel",
                    value: "1 Tahun",
                    color: "pink"
                },
                {
                    icon: "/assets/img/icons/vuejs.png",
                    name: "Vue Js",
                    value: "6 Bulan",
                    color: "yellow"
                },
                {
                    icon: "/assets/img/icons/flutter.png",
                    name: "Flutter",
                    value: "3 Bulan",
                    color: "purple"
                },
                {
                    icon: "/assets/img/icons/tailwind.png",
                    name: "Tailwind",
                    value: "1 Bulan",
                    color: "purple"
                },
                {
                    icon: "/assets/img/icons/alpinejs.png",
                    name: "Alpine JS",
                    value: "1 Bulan",
                    color: "red"
                },
                {
                    icon: "/assets/img/icons/livewire.png",
                    name: "Livewire",
                    value: "1 Bulan",
                    color: "green"
                },
            ]
        }
    },
}
</script>

<style scoped>
.avatar {
    border-radius: 0;
    object-fit: contain;
}
.progress-title {
    line-height: 100%;
}
</style>