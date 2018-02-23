<template>
  <form @submit.prevent="signup()">
    <label for="email">Username</label>
    <input v-model="email" type="email" />
    <label for="password">Password</label>
    <input v-model="password" type="password" />
    <input type="submit" value="Signup" />
  </form>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => (window.location.href = '/dashboard'))
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

