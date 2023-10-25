<template>
    <div v-if="isAuthenticated">
      <div class="chat-container">
        <h1>Чат</h1>
        <div class="chat" ref="chat">
          <div class="text" v-for="message in messages" :key="message.id">
            {{ message.user }}: {{ message.text }}
          </div>
        </div>
        <div v-show="emptyMsg" class="empty"> Текущих сообщений нет</div>
      </div>
      <input class="input" v-model="newMessage" type="text" placeholder="Введите сообщение" />
      <button class="button" @click="sendMessage">Отправить</button>
      <button class="button" @click="delMessage">Удалить</button>
    </div>
  
    <div v-else>
      для авторизации перейдите
      <router-link :to="{ name: 'Home' }">ссылке</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatComp',
    data() {
      return {
        messages: [],
        newMessage: '',
        emptyMsg: true,
        isAuthenticated: localStorage.getItem('isAuthenticated'),
        username: localStorage.getItem('username'),
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage !== '') {
          if (this.messages.length >= 10) {
            this.messages.shift();
          }
          this.emptyMsg = false;
          this.messages.push({ id: new Date().getTime(), text: this.newMessage, user: this.username });
          this.saveChatRecords();
          this.newMessage = '';
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        } else {
          alert('Введите сообщение');
        }
      },
      saveChatRecords() {
        const records = this.messages;
        localStorage.setItem(`messages_${this.username}`, JSON.stringify(records));
      },
      loadChatRecords() {
        const records = JSON.parse(localStorage.getItem(`messages_${this.username}`));
        if (records) {
          this.messages = records;
          this.emptyMsg = false;
        }
      },
      delMessage() {
        this.messages = [];
        localStorage.removeItem(`messages_${this.username}`);
        this.emptyMsg = true;
      },
      scrollToBottom() {
        const chat = this.$refs.chat;
        chat.scrollTop = chat.scrollHeight;
      },
    },
    created() {
      this.loadChatRecords();
    },
  };
  </script>
  
<style>

.chat-container {
    width: 500px;
    margin: 20px auto;
  }

.text {
    margin-bottom: 15px;
    text-align: left;
}

.chat {
    overflow-y: auto;
    width: 500px;
    height: 370px;
    font-weight: bold;
    text-align: center;
    margin: 20px auto;
    padding: 20px;
    background-color: rgb(39, 46, 52);
    border: 1px solid #ccc;
}

.input {
    width: 500px;
    padding: 5px;
    background-color: rgb(45, 51, 57);
    font-family: "RalewayRegular";
    font-size: large;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.button {
    background-color: rgb(45, 51, 57);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: rgb(45, 51, 57);
}
</style>