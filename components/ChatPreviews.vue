<template>
  <div class="previews">
    <MessagePreview
      v-for="(conv, index) in this.convs"
      :key="index"
      :data="conv"
      :convid="conv.id"
    />
  </div>
</template>

<script>
import MessagePreview from '~/components/MessagePreview.vue'
import PouchDB from 'pouchdb'

export default {
  components: {
    MessagePreview,
  },
  data() {
    return {
      convs: []
    }
  },
  created: function() {
    const db = new PouchDB('http://localhost:5984/cradochat')

    db.get('convs').then(doc => {
      this.convs = doc.convs
    })
  }
}
</script>

<style scoped>
  .previews {
    overflow-y: scroll;
  }
</style>

