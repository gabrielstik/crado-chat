import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      username: '',
      channel: '',
      messages: []
    },
    mutations: {
      updateMessages(state, message) {
        state.messages.push(message)
      },
      setID(state, id) {
        // if (localStorage.getItem('userID')) {
        //   state.id = localStorage.getItem('userID')
        // }
        // else {
        //   state.id = id
        //   localStorage.setItem('userID', id)
        // }
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