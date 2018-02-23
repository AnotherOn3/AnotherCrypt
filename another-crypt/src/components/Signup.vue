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
          console.log(user);
          console.log('blabla');
          var myRef = db
            .ref()
            .child('users/')
            .push().key;
          console.log(myRef);
          db
            .ref('users/')
            .push({ email: user.email, id: user.uid, capital: 10000 });
          // window.location.href = '/dashboard';
          console.log(key);
        })
        .catch(function(error) {});
    },
  },
};
</script>
