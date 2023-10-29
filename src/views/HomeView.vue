<template>
  <SectionHeder />
  <SectionFilter />
  <ListsMovies />
</template>

<script>
import SectionHeder from '../components/SectionHeder.vue'
import SectionFilter from '../components/SectionFilter.vue'
import ListsMovies from '../components/ListMovies.vue'
export default {
  data() {
    return {}
  },
  components: {
    SectionHeder,
    SectionFilter,
    ListsMovies
  }
}
</script>
<style scoped>
</style>