<template>
  <div class="filter">
    <input
      @input="(event) => setFilters({ key: 'title', value: event.target.value })"
      :value="filters.title"
      type="text"
      class="input"
      placeholder="Search By Title"
    />
    <input
      @input="(event) => setFilters({ key: 'year', value: event.target.value })"
      :value="filters.year"
      class="input"
      placeholder="Search By year"
      type="number"
    />
    <input
      @input="(event) => setFilters({ key: 'numberOfActors', value: event.target.value })"
      :value="filters.numberOfActors"
      type="number"
      class="input"
      placeholder="Search By Number Of Actors"
      style="min-width: 210px"
      min="1"
    />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('Movies', {
      filters: 'filters'
    })
  },
  methods: {
    ...mapMutations('Movies', {
      setFilters: 'setFilters'
    })
  }
}
</script>
<style scoped>
.filter {
  padding-left: var(--md);
  gap: 10px;
  padding-right: var(--md);
  display: flex;
  align-items: center;
  background-color: var(--neutral);
}
</style>