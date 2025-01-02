<template>
  <q-page class="flex">
    <div class="absolute-center text-center">

      <p class="text-h5">Please login to continue</p>
      <q-btn
        color="primary"
        label="Login"
        to="/login"
      />
    </div>


    <q-footer class='"absolute-bottom row flex-center color="grey-8"'>
      <span class="text-caption">© 2021 School Chat <b>Copyright Milivojevic, Farajollahi</b> </span>
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage'
});
</script>

