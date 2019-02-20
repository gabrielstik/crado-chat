<template>
  <div class="chatWindow">
    <chat-header
      :isSearch=isSearch
    />
    <!-- <chat-search/> -->
    <chat-messages
      v-if="!isSearch"
    />
    <div v-if="!isSearch" class="chatWindow__footer">
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
import ChatHeader from '~/components/ChatHeader.vue'
import ChatMessages from '~/components/ChatMessages.vue'

export default {
  components: {
    ChatHeader,
    ChatMessages,
  },
  props: {
    isSearch: {
      type: Boolean,
      default:() => false
    }
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
