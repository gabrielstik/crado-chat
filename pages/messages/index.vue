<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        crado-chat
      </h1>
      <h2 class="subtitle">
        Crado Chat
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import PouchDB from 'pouchdb'

export default {
  components: {
    AppLogo
  },
  mounted: function() {
    const db = new PouchDB('http://localhost:5984/cradochat')

    const convs = {
      "_id": "convs",
      "convs": [
        {
          "created": "1550527581",
          "users": [
            "28",
            "12"
          ],
          "messages": [
            {
              "from": "28",
              "time": "1550527600",
              "message": "Salut gros"
            },
            {
              "from": "12",
              "time": "1550527601",
              "message": "Je suis pas ton gros gars"
            },
            {
              "from": "28",
              "time": "1550527602",
              "message": "Je suis pas ton gars mec"
            },
            {
              "from": "12",
              "time": "1550527603",
              "message": "Salut gros"
            },
            {
              "from": "28",
              "time": "1550527604",
              "message": "Je suis pas ton gros gars"
            }
          ]
        }
      ]
    }
    db.put(convs)
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

