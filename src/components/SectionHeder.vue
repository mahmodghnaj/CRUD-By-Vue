<template>
  <div>
    <div class="heder">
      <h1 class="headerText">Movies</h1>
      <button @click="$router.push('/editor-movie')" class="btn btn-primary">Add New Movie</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {}
}
</script>
<style scoped>
.heder {
  padding-left: var(--md);
  padding-right: var(--md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headerText {
  color: var(--base-content);
  font-size: var(--font-large);
  line-height: 32px;
  font-weight: bold;
}
</style>