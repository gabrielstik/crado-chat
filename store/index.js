import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      username: 'anonymous',
      channel: 'general',
      messages: []
    },
    mutations: {
      updateMessages(state, message) {
        state.messages.push(message)
      },
      setID(state, id) {
        state.id = id
      },
      setUsername(state, username) {
        state.username = username
      },
      setChannel(state, channel) {
        state.channel = channel
      }
    }
  })
}

export default createStore