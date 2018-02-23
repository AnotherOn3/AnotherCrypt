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
import { auth, db } from '../firebase';
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
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          const newKey = db
            .ref('users/')
            .push()
            .key();
          console.log(newKey);
          console.log(user);
          db
            .ref('users/')
            .push({ email: user.email, id: user.uid, capital: 10000 });
          // window.location.href = '/dashboard';
        })
        .catch(function(error) {});
    },
  },
};
</script>

