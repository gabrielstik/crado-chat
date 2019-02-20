<template>
    <div class="chatWindow__messages">
      <Message
        v-for="(message, index) of messages"
        :key="index"
        :isSent=isSent(message.from)
        image="./_nuxt/assets/images/man1.png"
        :content=message.message
      />
    </div>
</template>

<script>
import Message from '~/components/Message.vue'
import PouchDB from 'pouchdb'

export default {
  components: {
    Message,
  },
  props: {
    convID: {
      type: String,
      default:() => "0"
    },
    messages: {
      type: Array,
      default:() => []
    }
  },
  methods: {
    isSent: (_authorID) => {
      return /*userID*/28 == _authorID // Update varables name
    },
  },
  data() {
    return {
      // messages: this.$store.state.api.convs[this.convID].messages,
      convs: this.$store.state.api.convs
    }
  },
  created: function() {
    const db = new PouchDB('http://localhost:5984/cradochat')

    db.get('convs').then(doc => {
      this.messages = doc.convs[0].messages
    })
  },
}
</script>
