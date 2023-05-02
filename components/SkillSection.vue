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
					<div :class="`card shadow-lg lift h-100 ${ item?.value >= 90 ? 'text-'+item?.color : 'text-dark' }`">
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
					</div>
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
import { SKILLS } from "@/commons/constants/list-item.js";

export default {
    computed: {
        skills() {
            return SKILLS
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
.progress-list .progressbar svg {
    height: 0 !important;
}
</style>