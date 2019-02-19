<template>
    <div class="chatWindow__messages">
      <Message
        v-for="(message, index) in messages"
        :key="index"
        :isSent=isSent(message.authorID)
        image="./_nuxt/assets/images/man1.png"
        :content=message.content
      />
    </div>
</template>

<script>
import Message from '~/components/Message.vue'

export default {
  components: {
    Message,
  },
  methods: {
    isSent: (_authorID) => {
      return /*userID*/3 == _authorID // Update varables name
    }
  },
  data() {
    return {
      messages: [
        {
          content: 'coucou',
          authorID: '3',
          date: '42986529O659'
        },
        {
          content: 'Salut',
          authorID: '4',
          date: '42986529O659'
        },
        {
          content: 'coucou Thierry',
          authorID: '3',
          date: '42986529O659'
        }
      ]
    }
  }
}
</script>
