// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import { auth, db } from './firebase';
Vue.config.productionTip = false;

Vue.component('Signup', Signup);
Vue.component('Login', Login);
Vue.component('Dashboard', Dashboard);

function getUserFromDb(id) {
  db
    .ref(`users/${id}`)
    .once('value')
    .then(snapshot => {
      console.log(snapshot.val());
    });
}
getUserFromDb('-L62gOcFS71aGUEipKEt');
/* eslint-disable no-new */
const unsubscribe = auth.onAuthStateChanged(user => {
  console.log(user);
  new Vue({
    router,
    el: '#app',
    template: '<App :user="user" />',
    components: { App },
    data: {
      user: {
        email: user.email,
        uid: user.uid,
        capital: 10000,
      },
    },
  });
  // remove this listener so that we aren't trying to make new vue objects
  // every time the auth state changes.
  unsubscribe();
});
