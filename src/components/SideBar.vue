<template>
  <div class="sidBar">
    <ul class="list">
      <li class="list-item" v-for="route in routes" :key="route.name">
        <router-link :class="{ active: $route.path === route.to }" :to="route.to">{{
          route.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: 'Movies',
          name: 'movies',
          to: '/'
        },
        {
          title: 'Editor Movie',
          name: 'editorMovie',
          to: '/editor-movie'
        }
      ]
    }
  }
}
</script>
<style scoped>
.sidBar {
  width: 200px;
  flex-shrink: 0;
  padding-top: var(--xl);
}
.list {
  list-style-type: none;
  padding: 0;
}
.list-item {
  position: relative;
  margin-bottom: 4px;
}
.list-item a {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  color: var(--base-content);
  text-decoration: none;
  font-size: var(--font-medium);
  line-height: 24px;
}
.list-item:hover {
  background-color: var(--neutral);
}
.active {
  background-color: var(--neutral);
}
.active:before {
  content: '';
  position: absolute;
  right: 0;
  background-color: var(--primary);
  height: 100%;
  width: 4px;
}
</style>