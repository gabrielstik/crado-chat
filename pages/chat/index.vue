<template>
  <section>
    <div>
      <chat ref="chat"/>
    </div>
    <colors/>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import MessagePreview from '~/components/MessagePreview.vue'
import ChatWindow from '~/components/ChatWindow.vue'
import Colors from '~/components/Colors.vue'
import Chat from '~/components/Chat.vue'
import openSocket from 'socket.io-client'

export default {
  components: {
    AppLogo,
    MessagePreview,
    ChatWindow,
    Colors,
    Chat
  },
  mounted: function() {
    const socket = openSocket('http://localhost:3000')

    const setUsername = () => {
      if (this.$store.state.username) {
        socket.emit('add user', this.$store.state.username);
      }
    }
    setUsername()

    const sendMessage = (message) => {
      this.$store.commit('updateMessages', { isSent: true, message: message, author: this.username, id: socket.id })
      socket.emit('new message', message);
    }
    this.$refs.chat.$refs.chatwindow.$refs.form.addEventListener('submit', e => {
      e.preventDefault()
      if(this.$refs.chat.$refs.chatwindow.$refs.input.value != '') {
        sendMessage(this.$refs.chat.$refs.chatwindow.$refs.input.value)
        this.$refs.chat.$refs.chatwindow.$refs.input.value = ''
      }
    })

    socket.on('login', data => {
      // socket.join(this.$store.state.channel)
      this.$store.commit('setID', socket.id)
    })
    socket.on('new message', (data, options) => { {
      this.$store.commit('updateMessages', { isSent: false, message: data.message, author: data.username })
      console.log('data')
      console.log(data)
    } })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

