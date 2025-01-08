<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          @click="goBack"
          icon="arrow_back"
          flat
          dense
          label="Back"
        />

        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn
          v-if="!isLoggedIn"
          to="/login"
          class="absolute-right"
          icon="account_circle"
          no-caps
          flat
          dense
          label="Login"
        />
        <q-btn
          v-else
          @click="logout"
          class="absolute-right"
          icon="logout"
          no-caps
          flat
          dense
          label="Logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple :to="{ path: '/', query: { tab: 'login' } }">
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/login', query: { tab: 'login' } }">
          <q-item-section avatar>
            <q-icon name="fas fa-sign-in-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/login', query: { tab: 'register' } }">
          <q-item-section avatar>
            <q-icon name="fas fa-user-plus" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/chat' }">
          <q-item-section avatar>
            <q-icon name="fas fa-comments" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Chat</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/users' }">
          <q-item-section avatar>
            <q-icon name="fas fa-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Users</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { auth, database } from '../boot/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref as dbRef, update } from 'firebase/database';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const leftDrawerOpen = ref(false);
    const title = ref('School Chat'); // Define the title property
    const route = useRoute();
    const router = useRouter();
    const isLoggedIn = ref(false);
    const userId = ref(null);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const goBack = () => {
      window.history.back();
    };

    const getTitle = (path) => {
      switch (path) {
        case '/login':
          return 'Login';
        case '/register':
          return 'Registrierung';
        case '/':
          return 'School Ops Chat';
        case '/chat':
          return 'Chat';
        case '/users':
          return 'Users';
        default:
          return 'School Chat';
      }
    };

    watch(route, (newRoute) => {
      title.value = getTitle(newRoute.path);
      document.title = title.value;
    }, { immediate: true });

    onAuthStateChanged(auth, (user) => {
      isLoggedIn.value = !!user;
      userId.value = user ? user.uid : null;
      if (user) {
        const userRef = dbRef(database, 'users/' + user.uid);
        update(userRef, { online: true });
      }
    });

    const logout = async () => {
      try {
        if (userId.value) {
          const userRef = dbRef(database, 'users/' + userId.value);
          await update(userRef, { online: false });
        }
        await signOut(auth);
        router.push('/login');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    return {
      leftDrawerOpen,
      title, // Return the title property
      toggleLeftDrawer,
      goBack,
      isLoggedIn,
      logout,
    };
  },
});
</script>

<style scoped>
.absolute-right {
  position: absolute;
  right: 16px;
}
</style>
