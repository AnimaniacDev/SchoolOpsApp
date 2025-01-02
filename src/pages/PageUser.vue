<template>
  <q-page class="q-pa-md">
    <q-list class="full-width" separator>
      <q-item v-for="user in users" :key="user.id" to="/chat" class="q-my-sm" clickable v-ripple>
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
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="text-caption absolute-center">
          © 2025 School Chat
          <span><b>by Milivojevic and Farajollahi</b>
          </span>
        </q-toolbar-title>
      </q-toolbar>

    </q-footer>
  </q-page>
</template>

<script>
  export default{
    data() {
      return{
        users: [{
          id: 1,
          name: 'Jim',
          online: true,
        }, {
          id: 2,
          name: 'Pam',
          online: false,
        }, {
          id: 3,
          name: 'Dwight',
          online: true,
        }, {
          id: 4,
          name: 'Michael',
          online: false,
        }, {
          id: 5,
          name: 'Angela',
          online: true,
        }, {
          id: 6,
          name: 'Oscar',
          online: false,
        }, {
          id: 7,
          name: 'Kevin',
          online: true,
        }, {
          id: 8,
          name: 'Stanley',
          online: false,
        }, {
          id: 9,
          name: 'Phyllis',
          online: true,
        }, {
          id: 10,
          name: 'Meredith',
          online: false,
        }]
      }
    }
  }
</script>
