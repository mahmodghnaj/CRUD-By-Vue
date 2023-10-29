<template>
  <div class="heder-actors">
    Actors :
    <div v-if="!newActor && !editActor" class="add" @click="newActor = true">+ Add Actor</div>
    <div v-else-if="newActor" class="cancel" @click="restActor">cancel</div>
    <div v-if="editActor" class="cancel" @click="cancelEdit">cancel Edit</div>
  </div>
  <MyCustomForm @submit="submit" v-if="newActor || editActor" class="editor-actor">
    <div class="filed">
      <Field
        name="name"
        :rules="[required]"
        v-model="actor.name"
        type="text"
        class="input"
        placeholder="Name"
      />
      <ErrorMessage class="error-message" name="name" />
    </div>
    <div class="filed">
      <Field
        name="age"
        :rules="[required, isOldNumber]"
        v-model="actor.age"
        type="number"
        class="input"
        placeholder="Age"
      />
      <ErrorMessage class="error-message" name="age" />
    </div>
    <div class="filed">
      <Field
        name="joinDate"
        v-model="actor.joinDate"
        :rules="[required, isValidDateFormat]"
        type="text"
        class="input"
        placeholder="join date"
      />
      <ErrorMessage class="error-message" name="joinDate" />
    </div>
    <div class="filed">
      <Field name="role" v-model="actor.role" as="select" class="input select" :rules="[required]">
        <option disabled selected :value="0">Actor’s Role</option>
        <option v-for="(role, index) in actorRoles" :key="index" :value="role">
          {{ role }}
        </option>
      </Field>
      <ErrorMessage class="error-message" name="role" />
    </div>
    <button type="submit" v-if="editActor" class="add-actor">Save</button>
    <button type="submit" v-else class="add-actor">ADD</button>
  </MyCustomForm>
  <div>
    <table class="table table-pin-cols">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>age</th>
          <th>join date</th>
          <th>actor’s role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="actor in actors" :key="actor.id">
          <th>{{ actor.id }}</th>
          <td>{{ actor.name }}</td>
          <td>{{ actor.age }}</td>
          <td>{{ actor.joinDate }}</td>
          <td>{{ actor.role }}</td>
          <th class="actions">
            <div class="table-action action-edit" @click="update(actor)">Edit</div>
            <div class="table-action action-delete" @click="deleteActor(actor.id)">Delete</div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { Field, ErrorMessage, Form as MyCustomForm } from 'vee-validate'
export default {
  emits: ['deleteActor', 'newActor', 'editActor'],
  props: {
    actors: {}
  },
  data() {
    return {
      newActor: false,
      editActor: false,
      actor: {
        name: null,
        age: null,
        joinDate: null,
        role: 0
      },
      actorRoles: [
        'Background role',
        'Cameo',
        'Recurring Character',
        'Side Character',
        'Series Regular'
      ]
    }
  },
  methods: {
    restActor() {
      this.actor = {
        name: null,
        age: null,
        joinDate: null,
        role: 0
      }
      this.newActor = false
      this.editActor = false
    },
    add() {
      this.$emit('newActor', { ...this.actor, id: this.actors.length + 1 })
      this.restActor()
    },
    deleteActor(id) {
      this.$emit('deleteActor', id)
      this.restActor()
    },
    update(actor) {
      this.newActor = false
      this.editActor = true
      this.actor = JSON.parse(JSON.stringify(actor))
    },
    cancelEdit() {
      this.editActor = false
      this.restActor()
    },
    saveEdit() {
      this.$emit('editActor', this.actor)
      this.restActor()
    },
    submit() {
      this.editActor ? this.saveEdit() : this.add()
    }
  },
  computed: {
    required() {
      return (value) => {
        if (!value) return 'This field is required'
        return true
      }
    },
    isOldNumber() {
      return (value) => {
        const regex = /^[1-9]\d*$/
        if (!regex.test(value)) return 'This field must be Old Number'
        return true
      }
    },
    isValidDateFormat() {
      return (value) => {
        const regex = /^\d{4}-\d{1,2}-\d{1,2}$/
        if (!regex.test(value)) return 'input is not in the correct format: Y-M-D'
        return true
      }
    }
  },
  components: {
    Field,
    ErrorMessage,
    MyCustomForm
  }
}
</script>
<style scoped>
.heder-actors {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add {
  color: var(--primary);
  font-weight: bold;
  cursor: pointer;
}
.editor-actor {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.cancel {
  color: crimson;
  cursor: pointer;
}
.add-actor {
  color: var(--accent);
  cursor: pointer;
  background-color: transparent;
  height: 2rem;
  margin-bottom: 18px;
  border: 0;
  font-weight: bold;
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.filed {
  display: flex;
  gap: 5px;
  flex-direction: column;
  min-height: 55px;
}
.select {
  height: 37px;
}
</style>