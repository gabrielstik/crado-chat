import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      myID: 28,
      messages: []
    },
    mutations: {
      updateMessages(state, message) {
        state.messages.push(message)
        console.log(state.messages)
      }
    }
  })
}

export default createStore