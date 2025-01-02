<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          name="login"
          label="Login"
        />
        <q-tab
          name="register"
          label="Registrierung"
        />
      </q-tabs>

        <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Login">
          <login-register />
        </q-tab-panel>
        <q-tab-panel name="Registration">
          <login-register />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>


    <q-footer class='"absolute-bottom row flex-center color="grey-8"'>
      <span class="text-caption">© 2021 School Chat <b>Copyright Milivojevic, Farajollahi</b> </span>
    </q-footer>
  </q-page>
</template>

<script>
  export default{
    data() {
      return{
        tab: 'login',
      }
    },
    components:{
      'login-register': require('components/LoginRegister.vue').default,
    }
}

</script>
