<template>
  <div>
    <button @click="myMethod">Show Error</button>
    <form @submit.prevent="login" >
      <input type="text" v-model.trim="form.email" name="username" placeholder="Username">

      <input type="password" v-model.trim="form.password" name="password" placeholder="Password">

      <button type="submit" >
        Log In
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Form from 'vform'

export default {

  data: () => ({
    form: new Form({
      email: 'ashikahmed@gmail.com',
      password: 'password'
    })
  }),

  methods: {
    login(){
      axios.post('http://127.0.0.1:8000/api/login', this.form)
          .then(response => {
            this.$toast.open({
              message: 'Authenticated Successfully!',
              type: 'success',
              position: 'top'
            });
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    myMethod() {
      this.$toast.open({
        message: 'Something went wrong!',
        type: 'error',
        position: 'top'
      });
    }
  }
}
</script>

<style scoped>

</style>