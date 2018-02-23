<template>
  <div>
    <h1>Hello {{ user.email }}</h1>
    <h2>You have {{ user.capital }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: ['user'],
  data() {
    return {
      hello: true,
    };
  },
};
</script>

<style>

</style>
