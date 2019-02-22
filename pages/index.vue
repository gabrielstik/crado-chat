<template>
  <section class="homeContainer">
    <div class="windowContainer">
      <Register/>
    </div>
  </section>
</template>

<script>
import Register from '~/components/register.vue';

export default {
  components: {
    Register,
  }
}
</script>

<style scoped>
.homeContainer {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--main);
  padding: 43px 0;
}

.homeContainer .windowContainer {
  width: 66%;
  height: 100%;
}
</style>