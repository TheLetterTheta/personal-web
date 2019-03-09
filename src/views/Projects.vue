<template lang="pug">
v-container(fluid)
    v-card(
        class="mb-3"
        v-for="project in projects" :key="project.id"
        )
        v-card-title {{project.title}}
        v-card-text {{project.description}}
        v-card-actions
            v-btn(@click="likeProject(project)" flat icon color="pink")
                font-awesome-icon(:icon="['fas', 'heart']")
            span(class="ml-1") {{project.likes}}
</template>
<script>
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('ProfileModule')

export default Vue.extend({
    computed: {
        ...mapGetters({
            projects: 'sortedProjects'
        }),
    },
    methods: {
        ...mapActions(['loadProjects', 'likeProject']),
    },
    created() {
        this.loadProjects();
    }
});
</script>