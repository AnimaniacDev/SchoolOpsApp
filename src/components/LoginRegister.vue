<template>
  <div>
    <q-form @submit.prevent="onSubmit">
      <q-input v-model="email" label="Email" />
      <q-input v-model="password" type="password" label="Password" />
      <q-btn type="submit" label="Submit" />
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth, database } from '../boot/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref as dbRef, set, onDisconnect } from 'firebase/database';

export default defineComponent({
  name: 'LoginRegister',
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const onSubmit = async () => {
      try {
        if (props.mode === 'login') {
          const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          console.log('Logged in');

          // Update online status
          const userRef = dbRef(database, 'users/' + user.uid);
          await set(userRef, {
            email: user.email,
            name: user.email.split('@')[0], // Use the part before the @ as the name
            online: true
          });

          // Set up onDisconnect to set online status to false
          onDisconnect(userRef).update({ online: false });
        } else {
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          console.log('Registered');

          // Add new user to the database
          const userRef = dbRef(database, 'users/' + user.uid);
          await set(userRef, {
            email: user.email,
            name: user.email.split('@')[0], // Use the part before the @ as the name
            online: true
          });

          // Set up onDisconnect to set online status to false
          onDisconnect(userRef).update({ online: false });
        }
        router.push('/chat'); // Navigate to the chat page after successful login or registration
      } catch (error) {
        console.error(error);
      }
    };

    return {
      email,
      password,
      onSubmit,
    };
  },
});
</script>

<style scoped>
/* Add any styles you need here */
</style>
