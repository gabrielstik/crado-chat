<template>
    <div class="chatWindow__messages">
      <Message
        v-for="(message, index) of this.messages"
        :key="index"
        :isSent=isSent(message.from)
        image="./_nuxt/assets/images/man1.png"
        :content=message
      />
    </div>
</template>

<script>
import Message from '~/components/Message.vue'

export default {
  components: {
    Message,
  },
  props: {
    convID: {
      type: String,
      default:() => "0"
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
      // convs: this.$store.state.api.convs
      messages: this.$store.state.messages
    }
  }
}
</script>
