<template>
  <div class="col-md-6 m-0">
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model.trim="form.name" class="form-control">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model.trim="form.username" class="form-control">
        <div v-if="form.errors.has('username')" v-html="form.errors.get('username')" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" v-model.trim="form.email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="form.password" class="form-control" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="password_confirmation">Password</label>
        <input type="password" v-model="form.password_confirmation" class="form-control" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary" :disabled="form.busy">
        Log In
      </button>
    </form>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
export default {
  name: "register",

  setup() {
    return {
      form: new Form({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    };
  },

  methods: {
    register() {
      axios.post('http://127.0.0.1:8000/api/register', this.form)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error.response.data.errors);
          });
    }
  }
}
</script>

<style scoped>

</style>