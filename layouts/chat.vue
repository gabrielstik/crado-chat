<template>
  <section class="chat">
    <div class="allMessages">
      <div class="title">
        <h2>All messages</h2>
        <div class="newMessage"></div>
      </div>
      <input class="search" type="text" name="search" placeholder="Search message"/>
      <div class="previews">
        <MessagePreview/>
        <MessagePreview/>
        <MessagePreview/>
        <MessagePreview/>
        <MessagePreview/>
        <MessagePreview/>
      </div>
    </div>
    <div class="chatWindowContainer">
      <ChatWindow/>
    </div>
  </section>
</template>

<script>
import Message from '~/components/Message.vue'
import ChatWindow from '~/components/ChatWindow.vue'
import MessagePreview from '~/components/MessagePreview.vue'

export default {
  components: {
    Message,
    ChatWindow,
    MessagePreview
  }
}
</script>

<style scoped>

.chat {
  min-width: 720px;
  height: 96vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: 180px;
  margin-right: 180px;
  z-index: 10;
  position: relative;
  display: flex;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 14px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 60px 41px 0 41px;
}

.newMessage {
  background: url("../assets/pictograms/new.svg");
  background-color: var(--main);
  background-repeat: no-repeat;
  background-position: 50%;

  border-radius: 4px;

  width: 35px;
  height: 35px;

  cursor: pointer;
}

.allMessages {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.previews {
  overflow-y: scroll;
}

.allMessages .title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.allMessages .title h2 {
  font-size: 22px;
  font-family: Muli;
}

.allMessages .title img {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.allMessages .search {
  width: 100%;
  height: 7%;
  border-radius: 4px;
  padding: 10px 10px 10px 50px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  background-color: var(--white);
  background-image:url("../assets/pictograms/search.svg");
  background-repeat: no-repeat;
  background-position: left 5% top 50%;
  font-family: Muli;
}

.allMessages .search::placeholder {
  font-size: 16px;
  color: var(--authorSecondary);
}

.chatWindowContainer {
  width: 65%;
  height: 100%;
}
</style>
