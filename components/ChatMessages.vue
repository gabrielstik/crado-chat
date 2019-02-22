<template>
    <div class="chatWindow__messages">
      <Message
        v-for="(message, index) of this.messages"
        :key="index"
        :successive= "sameAuthor(messages, index)"
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
    sameAuthor: (messages, index) => {
        console.log(messages)
        console.log(index)
      if(index > 0){
        return messages[index-1].id == messages[index].id
      } else {
        return false
      }
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
