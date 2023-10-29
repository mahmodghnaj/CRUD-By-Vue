<template>
  <div class="details-move">
    <div class="details">
      <h1 class="text-details">Details Movie</h1>
      <div><span class="title"> Title:</span>{{ movie.title }}</div>
      <div style="max-width: 900px">
        <span class="title"> Description:</span>{{ movie.description || '--' }}
      </div>
      <div><span class="title"> Year: </span>{{ movie.year }}</div>
      <div><span class="title"> Actors: </span></div>
      <div>
        <table class="table table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>age</th>
              <th>join date</th>
              <th>actor’s role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="actor in movie.actors" :key="actor.id">
              <th>{{ actor.id }}</th>
              <td>{{ actor.name }}</td>
              <td>{{ actor.age }}</td>
              <td>{{ actor.joinDate }}</td>
              <td>{{ actor.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      movie: null
    }
  },
  props: {
    id: {}
  },
  computed: {
    ...mapGetters('Movies', {
      movies: 'movies'
    })
  },
  created() {
    const index = this.movies.findIndex((item) => item.id == this.id)
    if (index !== undefined) {
      this.movie = this.movies[index]
    }
  }
}
</script>
<style scoped>
.details-move {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--md);
}
.text-details {
  text-align: center;
}
.details {
  padding: var(--md);
  border-radius: var(--md);
  min-width: 900px;
  background-color: var(--base-300);
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.title {
  font-weight: 600;
  margin-right: 5px;
  font-size: var(--font-large);
}
</style>