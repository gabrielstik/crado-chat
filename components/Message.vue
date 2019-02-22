<template>
  <div
    v-if="!content.isSent"
    class="messageContainer received"
  >
    <div
      v-if="!successive"
      class="imgContainer"
    >
      <div>{{ getFirstLetter("content.author") }}</div>
    </div>
    <div class="message">
      <div
        v-if="!successive"
        class="author"
      >
        {{ content.author }}
      </div>
      <div
        v-if="!successive"
        class="content"
      >
        {{ content.message }}
      </div>
      <div
        v-else
        class="successiveMessage content"
      >
        {{ content.message }}
      </div>
    </div>
  </div>
  <div
    v-else
    class="messageContainer sent"
  >
    <div class="message">
      <div class="content">{{ content.message }}</div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    content: {
      type: Object,
      default: () => "Salut"
    },
    successive: {
      type: Boolean,
      default: () => false
    },
    image: {
      type: String,
      default: () => ""
    },
    isSearch: {
      type: Boolean,
      default:() => false
    }
  },
  methods: {
    getFirstLetter(_string) {
      return _string.charAt(0)
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

.message .content {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 14px 10px;
  max-width: 295px;
  font-size: 14px;
  line-height: 1.2;
  background-color: var(--white)
}

.message .content.successiveMessage {
  margin-left: 40px;
}

.author {
  color: var(--author);
  font-size: 12px;
  margin-bottom: 4px;
}

.received {
  justify-content: flex-start;
}

.imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 17px;

  height: 23px;
  width: 23px;

  border-radius: 50%;
  background-color: grey;

  font-family: 'Muli';
  text-transform: uppercase;
  background: linear-gradient(180deg, #A7A7A7 0%, #7A7A7A 100%);
  color: var(--white)
}

.received .message .content{
  border-top-left-radius: 0px;
  border-top-right-radius: 12px;
  background-color: var(--main);
  color: white;
}


.sent {
  justify-content: flex-end;
}

.sent .message .content{
  border-top-left-radius: 12px;
  border-top-right-radius: 0px;
  border: 1px solid #EAEEF7;
}

</style>
