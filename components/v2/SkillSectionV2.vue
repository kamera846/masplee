<template>
	<section id="skills" class="wrapper bg-light">
		<div class="container py-10 py-md-14">
            <div class="row text-center">
				<div class="col-xl-10 mx-auto mb-10 px-xxl-15">
					<h3 class="display-4">Skill Set</h3>
				</div>
			</div>
			<div class="row justify-content-center gy-6">
				<div v-for="(item, idx) in skills" :key="'skill-'+idx" class="col-12 col-md-6 col-lg-4">
					<div class="skill-item card lift h-100 text-dark">
						<div class="card-body p-5 d-flex flex-row align-items-center">
							<div>
								<img class="avatar w-10 h-10 me-4" :src="item?.icon" :alt="item?.name" />
							</div>
							<div>
								<h4 class="mb-0">{{ item?.name }}</h4>
								<span
									class="badge bg-pale-green text-green rounded py-1"
									>{{ item?.exp }}</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
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