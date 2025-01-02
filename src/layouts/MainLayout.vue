<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
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
          {{title}}
        </q-toolbar-title>

        <q-btn
          to="/login"
          class="absolute-right"
          icon="account_circle"
          no-caps
          flat
          dense
          label="Login"
          />

      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
 computed: {
   title() {
    let currentPath = this.$route.fullPath;
    if (currentPath === '/') {
      return 'School Chat';
    } else if (currentPath === '/chat') {
      return 'Chat';
    } else if (currentPath === '/register') {
      return 'Register';
    } else if (currentPath === '/login') {
      return 'Login';
    } else if (currentPath === '/users') {
      return 'User';
    } else {
      return 'Page Not Found';
    }
   }
  },
   methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
