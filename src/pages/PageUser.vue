<template>
  <q-page class="q-pa-md">

    <q-list class="full-width" separator bordered>
      <q-item v-for="user in users" :key="user.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      users: [ {
        id: 1,
        name: 'Danny',
      }, {
        id: 2,
        name: 'Jonny',
      }, {
        id: 3,
        name: 'Mellani'
      }]
    }
  }
}
</script>
