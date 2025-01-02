<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
        />

        <q-toolbar-title class="text-h6 flex flex-center">
          {{title}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
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
    } else {
      return 'Page Not Found';
    }
   },
   methods: {
    openURL
    }
  }
};
</script>
