<template>
  <div
    v-if="status == 'received'"
    class="messageContainer received"
  >
    <div class="imgContainer">
      <img
        :src="image"
        alt="pp"
      >
    </div>
    <div class="message">
      {{ content }}
    </div>
  </div>
  <div
    v-else
    class="messageContainer sent"
  >
   <div class="message">
     {{ content }}
   </div>
  </div>
</template>

<script>
export default{
  props: {
    content: {
      type: String,
      default: () => "Salut"
    },
    status: {
      type: String,
      default: () => ""
    },
    image: {
      type: String,
      default: () => ""
    }
  }
}
</script>

<style scoped>
.messageContainer {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
}

.message {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 14px 10px;
  max-width: 295px;
  font-size: 14px;
  background-color: var(--white)
}

.received {
  justify-content: flex-start;
}

.received img {
  height: 23px;
  width: 23px;
  border-radius: 50%;
  margin-right: 17px;
}

.received .message {
  border-top-left-radius: 0px;
  border-top-right-radius: 12px;
  background-color: var(--main);
  color: white;
}


.sent {
  justify-content: flex-end;
}

.sent .message {
  border-top-left-radius: 12px;
  border-top-right-radius: 0px;
  border: 1px solid #EAEEF7;
}

</style>
