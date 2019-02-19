<template>
  <section class="container">
    <div class="allMessages">
      <div class="title">
        <h2>All messages</h2>
        <img src="../assets/pictograms/new.svg" alt="newMessage">
      </div>
      <div class="search" placeholder="Search message">
      </div>
      <div class="previews">
        <!-- <MessagePreview/> -->
      </div>
    </div>
    <div class="chatWindow">
      <!-- <chatWindow/> -->
    </div>
  </section>
</template>

<script>
import Message from '~/components/Message.vue'
// import chatWindow from '~/components/chatWindow.vue'
// import MessagePreview from '~/components/MessagePreview.vue'

export default {
  components: {
    Message,
    // chatWindow,
    // MessagePreview
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 41px 0 41px;
}

.allMessages {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.allMessages .title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.allMessages .title h2 {
  font-size: 22px;
}

.allMessages .title img {
  height: 35px;
  width: 35px;
}

.chatWindow {
  width: 65%;
}
</style>
