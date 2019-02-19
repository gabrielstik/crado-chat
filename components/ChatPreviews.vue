<template>
  <div class="previews">
    <MessagePreview
      v-for="(messagePreview, index) in messagePreviews"
      :key="index"
    />
  </div>
</template>

<script>
import MessagePreview from '~/components/MessagePreview.vue'

export default {
  components: {
    MessagePreview,
  },

  data() {
    return {
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
      ]
    }
  }
}
</script>

<style scoped>
  .previews {
    overflow-y: scroll;
  }
</style>

