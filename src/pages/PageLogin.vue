<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px;">
      <q-tabs v-model="tab" class="text-grey-8" align="justify">
        <q-tab name="login" label="Login" icon="login" />
        <q-tab name="register" label="Register" icon="person_add" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register mode="login" />
        </q-tab-panel>
        <q-tab-panel name="register">
          <login-register mode="register" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

    <q-footer class="absolute-bottom row flex-center color-grey-8">
      <span class="text-caption">© 2021 School Chat <b>Copyright Milivojevic, Farajollahi</b> </span>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import LoginRegister from '../components/LoginRegister.vue';

export default defineComponent({
  name: 'PageLogin',
  components: {
    'login-register': LoginRegister,
  },
  setup() {
    const route = useRoute();
    const tab = ref(route.query.tab || 'login');

    watch(() => route.query.tab, (newTab) => {
      tab.value = newTab || 'login';
    });

    return {
      tab,
    };
  },
});
</script>

<style scoped>
.absolute-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
