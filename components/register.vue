<template>
  <section class="registerContainer">
    <div class="wechatContainer">
      <img src="../assets/pictograms/logo.svg" alt="logo">
      <h1>CradoChat</h1>
      <form ref="form">
        <input class="username" ref="username" type="text" placeholder="Pseudo">
        <input class="channel" ref="channel" type="text" placeholder="Channel">
        <a href="/chat" @click="e => this.chatNow(e)" class="signup" ref="chat">Chat now</a>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  mounted: function() {
    this.$refs.form.addEventListener('keydown', e => { if (e.keyCode == 13) this.chatNow(e) })
  },
  methods: {
    chatNow: function(e) {
      e.preventDefault()
      this.$store.commit('setUsername', this.$refs.username.value)
      this.$store.commit('setChannel', this.$refs.channel.value)
      this.$router.push('/chat')
    }
  }
}
</script>

<style scoped>
.registerContainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--background);
  font-family: Muli;
  border-radius: 14px;
}

.registerContainer .wechatContainer {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.registerContainer img {
  width: 87px;
  height: 87px;
  margin-bottom: 50px;
}

.registerContainer h1 {
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 47px;
  color: var(--title);
}

.registerContainer input {
  width: 100%;
  border-radius: 4px;
  background-color: var(--white);
  padding: 13px 16px 16px 48px;
}

.registerContainer .mail {
  margin-bottom: 8px;
}

.registerContainer .password {
  margin-bottom: 63px;
}

.registerContainer .signup {
  background-color: var(--main);
  color: var(--white);
  text-align: center;
  padding: 20px;
  margin-bottom: 26px;
  cursor: pointer;
}

.registerContainer p {
  width: 100%;
  color: var(--main);
  cursor: pointer;
}

input, a {
  margin-top: 20px;
  width: 100%;
}

form a {
  display: block;
}
</style>
