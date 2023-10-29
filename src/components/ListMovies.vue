<template>
  <div class="list">
    <div>
      <table class="table table-pin-cols">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Number Of Actors</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie.id">
            <th>{{ movie.id }}</th>
            <td>
              <div class="ellipsis" style="max-width: 150px">
                {{ movie.title }}
              </div>
            </td>
            <td>
              <div class="ellipsis">
                {{ movie.description || '--' }}
              </div>
            </td>
            <td>{{ movie.year }}</td>
            <td>{{ movie.actors.length }}</td>
            <th class="actions">
              <div class="table-action action-view" @click="$router.push(`/details/${movie.id}`)">
                View
              </div>
              <div
                class="table-action action-edit"
                @click="$router.push(`/editor-movie?id=${movie.id}`)"
              >
                Edit
              </div>
              <div class="table-action action-delete" @click="removeMovie(movie.id)">Delete</div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('Movies', {
      movies: 'movies'
    })
  },
  methods: {
    ...mapMutations('Movies', {
      removeMovie: 'removeMovie'
    })
  }
}
</script>
<style scoped>
.list {
  padding: var(--md);
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
}
</style>