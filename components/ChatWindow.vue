<template>
  <div class="chatWindow">
    <div class="chatWindow__header">
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
    <div class="chatWindow__messages">
      <Message
        status='received'
        image="./_nuxt/assets/images/man1.png"
        content='Salut gros'
      />
      <Message
        content='Jsuis pas ton gros gars'
      />
      <Message
        status='received'
        image="./_nuxt/assets/images/man1.png"
        content='Jsuis pas ton gars mec'
      />
      <Message
        status='received'
        image="./_nuxt/assets/images/man1.png"
        content='Salut gros'
      />
      <Message
        content='Jsuis pas ton gros gars'
      />
      <Message
        status='received'
        image="./_nuxt/assets/images/man1.png"
        content='Jsuis pas ton gars mec'
      />
      <Message
        status='received'
        image="./_nuxt/assets/images/man1.png"
        content='Salut gros'
      />
      <Message
        content='Jsuis pas ton gros gars'
      />
      <Message
        status='received'
        image="./_nuxt/assets/images/man1.png"
        content='Jsuis pas ton gars mec'
      />
    </div>
    <div class="chatWindow__footer">
      <div class="chatWindow__input">
        <form action="">
          <input type="text" placeholder="Tap your message here">
          <input type="submit" value="">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Message from '~/components/Message.vue'

export default {
  components: {
    Message
  }
}
</script>


<style scoped>
  .chatWindow {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    background-color: var(--white);
    border-radius: 4px;
    border: 1px solid var(--border);

    font-family: 'Muli';
    text-align: left;
  }

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

  .chatWindow__messages {
    height: 80%;
    padding: 30px;
    flex: 1;

    overflow-y: scroll;

    background-color: var(--white)
  }

  .chatWindow__footer {
    padding: 10px 28px;
    border-top: 1px solid var(--border);
  }

  .chatWindow__footer form {
    display: flex;
    align-items: center;

    font-size: 14px;
  }

  .chatWindow__input input[type="text"] {
    width: 100%;
    height: 100%;
  }

  .chatWindow__input input[type="submit"] {
    width: 33px;
    height: 33px;
    flex-shrink: 0;

    border-radius: 100%;

    background: url("../assets/pictograms/send.svg");
    background-size: 15px;
    background-color: var(--main);
    background-repeat: no-repeat;
    background-position: 50%;

    cursor: pointer;
  }
</style>
