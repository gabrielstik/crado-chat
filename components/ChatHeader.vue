<template>
  <div v-if="isSearch == false" class="chatWindow__header">
    <div class="chatWindow__author">
      <div class="chatWindow__authorPicture">
        <img src="../assets/images/man1.png" alt="author picture">
      </div>
      <div class="chatWindow__authorInfos">
        <div class="chatWindow__authorName">Didier Deschamps</div>
        <div class="chatWindow__status">Active right now</div>
      </div>
    </div>
  </div>
  <div v-else class="chatWindow__header">
    <form action="">
      <input type="text" placeholder="Search a friend" autofocus>
      <input type="submit" value="">
    </form>
  </div>
</template>
<script>
export default {
  props: {
    isSearch: {
      type: Boolean,
      default: () => true
    },
  },
}
</script>

<style scoped>
  .chatWindow__header {
    width: 100%;
    padding: 16px 28px;

    background-color: var(--background)
  }
  
  .chatWindow__author {
    display: flex;
  }

  .chatWindow__authorPicture {
    width: 42px;
    height: 42px;

    overflow: hidden;

    border-radius: 100%;
  }

  .chatWindow__authorPicture img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .chatWindow__authorInfos {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 35px;
  }

  .chatWindow__authorName {
    margin-bottom: 8px;

    font-size: 15px;
    color: var(--author)
  }

  .chatWindow__status {
    font-size: 12px;
    color: var(--authorSecondary)
  }

    .chatWindow input[type="text"] {
    width: 100%;
  }

  .chatWindow input[type="submit"] {
    display: none;
  }
</style>

