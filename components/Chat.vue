<template>
  <section class="chat">
    <div class="allMessages">
      <div class="title">
        <h2>All messages</h2>
        <!-- <div v-if="!isSearch" v-on:click="isSearch = !isSearch" class="newMessage"></div> -->
        <div v-if="!isSearch" v-on:click="newMessage()" class="newMessage"></div>
        <div v-if="isSearch" v-on:click="newMessage(true)" class="newMessage--close">×</div>
      </div>
      <input class="search" type="text" name="search" placeholder="Search message"/>
      <div class="previews">
        <!-- <div 
          v-for="(conv, index) in this.convs"
          :key="index"
          v-on:click="updateConversation(conv, index)"
          ref="previews"
        >
          <MessagePreview
            :data="conv"
            :id="conv.id"
          />
        </div> -->
      </div>
    </div>
    <div class="chatWindowContainer">
      <ChatWindow
        ref="chatwindow"
        :isSearch="isSearch"
        :convID="convID"
        :messages="messages"
      />
    </div>
  </section>
</template>

<script>
import Message from '~/components/Message.vue'
import MessagePreview from '~/components/MessagePreview.vue'
import ChatWindow from '~/components/ChatWindow.vue'

export default {
  components: {
    Message,
    MessagePreview,
    ChatWindow,
  },
  data() {
    return {
      isSearch: false,
      convID: "0",
      activeConvIndex: 0,
      messages: [],
      messagePreviews: [
        {
          receiverID: '3',
          conversationID: '1',
        },
        {
          receiverID: '4',
          conversationID: '2',
        },
        {
          receiverID: '3',
          conversationID: '3',
        }
      ],
      // convs: this.$store.state.api.convs,
    }
  },
  methods: {
    updateConversation(_conv, _index) {
      this.isSearch = false
      // this.convID = _conv.id
      this.messages = _conv.messages
      this.activeConvIndex = _index

      for(let i = 0; i < this.$refs.previews.length; i++) {
        if(i == _index) {
          this.$refs.previews[i].style.border = '1px solid var(--main)'
        } else {
          this.$refs.previews[i].style.border = '1px solid var(--border)'
        }
      }
      
    },
    // checkPreviews(_previews) {
    //   if(_previews.length == 0) {
    //     this.isSearch = true
    //   } else {
    //     this.isSearch = false

    //     this.messages = this.convs[0].messages
    //     this.$refs.previews[0].style.border = '1px solid var(--main)'
    //   }
    // },
    newMessage(_isClose = false) {
      this.isSearch = !this.isSearch

      if(!_isClose)
      {
        for(let i = 0; i < this.$refs.previews.length; i++) {
            this.$refs.previews[i].style.border = '1px solid var(--border)'
        }
      } else {
        this.$refs.previews[this.activeConvIndex].style.border = '1px solid var(--main)'
      }

    }
  },
  mounted(){
    // this.checkPreviews(this.convs)
  },
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

.previews {
  overflow-y: scroll;
  width: 100%;
}

.previews > div {
  margin-bottom: 10px;
  background-color: var(--white);

  border-radius: 4px;
  border: 1px solid var(--border);
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

.newMessage--close {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--main);
  background-repeat: no-repeat;
  background-position: 50%;
  text-align: center;
  font-size: 40px;

  border-radius: 4px;

  width: 35px;
  height: 35px;

  color: var(--white);

  cursor: pointer;
  user-select: none;
}

.allMessages {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  color: var(--title);
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
