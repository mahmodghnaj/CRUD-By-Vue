<template>
  <div class="editor-movie">
    <MyCustomForm class="form" @submit="submit">
      <h1 v-if="isEdit" class="text-form">Edit Movie</h1>
      <h1 v-else class="text-form">Add New Movie</h1>
      <Field
        name="title"
        :rules="[required]"
        v-model="movie.title"
        type="text"
        class="input"
        placeholder="Title"
      />
      <ErrorMessage class="error-message" name="title" />
      <Field
        :rules="[required, isYear]"
        name="year"
        v-model="movie.year"
        class="input"
        placeholder="Year"
        type="number"
      />
      <ErrorMessage class="error-message" name="year" />
      <Field
        v-model="movie.description"
        as="textarea"
        type="text"
        name="description"
        class="input textarea"
        placeholder="Description"
      />
      <EditorActors
        :actors="movie.actors"
        @newActor="(actor) => addNewActor(actor)"
        @deleteActor="(actorId) => deleteActor(actorId)"
        @editActor="(actor) => updateActor(actor)"
      />
      <button type="submit" class="btn btn-primary" v-if="isEdit">Save</button>
      <button type="submit" class="btn btn-primary" v-else>Add</button>
    </MyCustomForm>
  </div>
</template>
<script>
import EditorActors from '../components/EditorActors.vue'
import { mapMutations, mapGetters } from 'vuex'
import { Form as MyCustomForm, Field, ErrorMessage } from 'vee-validate'

export default {
  data() {
    return {
      isEdit: false,
      movie: {
        title: null,
        description: null,
        year: null,
        actors: []
      }
    }
  },
  computed: {
    ...mapGetters('Movies', {
      movies: 'movies'
    }),
    required() {
      return (value) => {
        if (!value) return 'This field is required'
        return true
      }
    },
    isYear() {
      return (value) => {
        const regex = /^\d{4}$/
        if (!regex.test(value)) return 'This field must be a valid Yare'
        return true
      }
    }
  },
  components: {
    EditorActors,
    MyCustomForm,
    ErrorMessage,
    Field
  },
  methods: {
    ...mapMutations('Movies', {
      addMovie: 'addMovie',
      updateMovie: 'updateMovie'
    }),
    addNewActor(actor) {
      this.movie.actors.push(actor)
    },
    deleteActor(actorId) {
      const index = this.movie.actors.findIndex((actor) => actor.id === actorId)
      if (index !== -1) {
        this.movie.actors.splice(index, 1)
      }
    },
    updateActor(updatedActor) {
      const index = this.movie.actors.findIndex((actor) => actor.id === updatedActor.id)
      if (index !== -1) {
        this.movie.actors[index] = updatedActor
      }
    },
    addNewMovie() {
      this.addMovie(this.movie)
      this.$router.push('/')
    },
    update() {
      this.updateMovie({ ...this.movie, id: this.$route.query.id })
      this.$router.push('/')
    },
    submit() {
      if (this.isEdit) this.update()
      else this.addNewMovie()
    }
  },

  created() {
    const id = this.$route.query.id
    const movieIndex = id ? this.movies.findIndex((item) => item.id == id) : -1
    if (movieIndex !== -1) {
      this.isEdit = true
      this.movie = this.movies[movieIndex]
    }
  }
}
</script>
<style scoped>
.editor-movie {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--md);
}
.text-form {
  text-align: center;
}
.form {
  padding: var(--md);
  border-radius: var(--md);
  min-width: 900px;
  background-color: var(--base-300);
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.textarea {
  resize: none;
  height: 80px;
}
</style>