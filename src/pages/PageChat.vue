<template>
  <q-page class="flex column">

    <q-banner inline-actions class="bg-grey-4 text-center"   >
      User is Offline.
    </q-banner>
    <div class="q-pa-md column co justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from === 'me'  ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width">
          <q-input
          bg-color="white"
          class="full-width"
          outlined
          rounded
          v-model="newMessage"
          label="Message"
          dense
        >
          <template v-slot:after>
            <q-btn
              @click="sendMessage"
              round
              dense
              flat
              type="submit"
              color="white"
              icon="send"
            />
          </template>
        </q-input>
        </q-form>

      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      newMessage: '',
      messages:[
        {
          text: 'Hey Jim, how are you?',
          from: 'me'
        },
        {
          text: 'Good, how are you?',
          from: 'them'
        },
        {
          text: 'Pretty good, thanks for asking',
          from: 'me'
        },
      ]
    }
  },
  methods:{
    sendMessage(){
      console.log('sending message', this.newMessage)
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          text: this.newMessage,
          from: 'me'
        });
        this.newMessage = '';
      }
    }
  }
};
</script>
