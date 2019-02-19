<template>
  <section class="registerContainer">
    <div class="wechatContainer">
      <img src="../assets/pictograms/logo.svg" alt="logo">
      <h1>WeChat</h1>
      <input class="mail" type="mail" placeholder="Adresse mail">
      <input class="password" type="password" placeholder="Mot de passe">
      <input class="signup" type="submit" value="Me connecter">
      <p>S'inscrire</p>
    </div>
  </section>
</template>

<script>

export default {
  components: {
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
}

.registerContainer p {
  width: 100%;
  color: var(--main);
}
</style>
