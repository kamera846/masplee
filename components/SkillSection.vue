<template>
	<section id="skills" class="wrapper bg-light">
		<div class="container py-10 py-md-14">
			<div class="row text-center">
				<div class="col-xl-10 mx-auto mb-10 px-xxl-15">
					<h3 class="display-4">Skill Set</h3>
				</div>
				<!-- /column -->
			</div>
			<!-- /.row -->
			<div class="row gy-6">
				<div v-for="(item, index) in skills" :key="'skill-'+index" class="col-12 col-md-6">
					<a href="#!" :class="`card shadow-lg lift h-100 ${ item?.value >= 90 ? 'text-'+item?.color : 'text-dark' }`">
						<div class="card-body p-5 d-flex flex-row align-items-center">
							<div>
								<img class="avatar w-10 h-10 me-4" :src="item?.icon" :alt="item?.name" />
							</div>
                            <ul class="progress-list w-100">
                                <li class="mb-2">
                                    <p class="progress-title text-dark">{{ item?.name }}</p>
                                    <div :class="`progressbar line soft-${ item?.color }`" :data-value="item?.value"></div>
                                </li>
                            </ul>
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
        skills() {
            return [
                {
                    icon: "/assets/img/icons/circle-html-5.png",
                    name: "HTML 5",
                    value: 90,
                    color: "red"
                },
                {
                    icon: "/assets/img/icons/square-javscript.png",
                    name: "Javascript",
                    value: 90,
                    color: "yellow"
                },
                {
                    icon: "/assets/img/icons/circle-sass.png",
                    name: "Sass",
                    value: 80,
                    color: "pink"
                },
                {
                    icon: "/assets/img/icons/square-kotlin.png",
                    name: "Kotlin",
                    value: 80,
                    color: "purple"
                },
                {
                    icon: "/assets/img/icons/circle-css.png",
                    name: "CSS",
                    value: 80,
                    color: "blue"
                },
                {
                    icon: "/assets/img/icons/circle-php.png",
                    name: "PHP",
                    value: 70,
                    color: "purple"
                },
                {
                    icon: "/assets/img/icons/square-java.png",
                    name: "Java",
                    value: 60,
                    color: "red"
                },
                {
                    icon: "/assets/img/icons/square-dart.png",
                    name: "Dart",
                    value: 50,
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