<template>
  <q-page class="q-pa-md">
    <q-list class="full-width" separator>
      <q-item v-for="user in users" :key="user.id" class="q-my-sm" clickable v-ripple @click="startPrivateChat(user)">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="user.online ? 'blue' : 'grey-4'">
            {{ user.online ? 'Online' : 'Offline' }}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { database } from '../boot/firebase';
import { ref as dbRef, onValue } from 'firebase/database';

export default defineComponent({
  name: 'PageUser',
  setup() {
    const users = ref([]);
    const router = useRouter();

    onMounted(() => {
      const usersRef = dbRef(database, 'users');
      onValue(usersRef, (snapshot) => {
        const data = snapshot.val();
        users.value = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      });
    });

    const startPrivateChat = (user) => {
      router.push({ path: '/private-chat', query: { userId: user.id } });
    };

    return {
      users,
      startPrivateChat,
    };
  },
});
</script>

<style scoped>
/* Add any styles you need hier */
</style>
