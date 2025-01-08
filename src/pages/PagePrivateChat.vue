<template>
  <q-page class="q-pa-md">
    <q-list>
      <q-item v-for="message in messages" :key="message.id">
        <q-item-section>
          <q-item-label>{{ message.text }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-input v-model="newMessage" label="New Message" @keyup.enter="sendMessage" />
    <q-btn @click="sendMessage" label="Send" />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { database } from '../boot/firebase';
import { ref as dbRef, onValue, push } from 'firebase/database';

export default defineComponent({
  name: 'PagePrivateChat',
  setup() {
    const route = useRoute();
    const messages = ref([]);
    const newMessage = ref('');
    const userId = route.query.userId;

    onMounted(() => {
      const messagesRef = dbRef(database, `private-chats/${userId}`);
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        messages.value = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      });
    });

    const sendMessage = async () => {
      if (newMessage.value.trim()) {
        const messagesRef = dbRef(database, `private-chats/${userId}`);
        await push(messagesRef, { text: newMessage.value });
        newMessage.value = '';
      }
    };

    return {
      messages,
      newMessage,
      sendMessage,
    };
  },
});
</script>

<style scoped>
/* Add any styles you need here */
</style>
