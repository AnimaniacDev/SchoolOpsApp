<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <q-tabs v-model="tab" color="primary" align-tabs-center>
          <q-tab name="vue" label="Vue" />
          <q-tab name="quasar" label="Quasar" />
          <q-tab name="vite" label="Vite" />
          <q-tab name="fontawesome" label="Fontawesome" />
          <q-tab name="firebase" label="Firebase" />
        </q-tabs>
      </q-card-section>

      <q-card-section>
        <q-tab-panels v-model="tab">
          <!-- Tab Vue -->
          <q-tab-panel name="vue">
            <div>
              <h4>Vue</h4>
              <p>Vue.js ist ein fortgeschrittenes Framework für die Erstellung von interaktiven Benutzeroberflächen. Es bietet eine leistungsfähige, komponentenbasierte Architektur, die das Erstellen und Pflegen von Webanwendungen erleichtert. Vue unterstützt einfache, intuitive Syntax und ermöglicht den Einsatz von Tools zur Entwicklung effizienter und benutzerfreundlicher Anwendungen.</p>
            </div>
          </q-tab-panel>

          <!-- Tab Quasar -->
          <q-tab-panel name="quasar">
            <div>
              <h4>Quasar</h4>
              <p>Quasar ist ein modernes Framework für Vue-Anwendungen, das eine Vielzahl an Komponenten und Tools bietet, um Apps effizient zu erstellen.</p>
            </div>
          </q-tab-panel>

          <!-- Tab Vite -->
          <q-tab-panel name="vite">
            <div>
              <h4>Vite</h4>
              <p>Vite ist ein schneller Entwicklungsserver und Build-Tool, das für Projekte mit modernen Webstandards entwickelt wurde.</p>
            </div>
          </q-tab-panel>

          <!-- Tab Fontawesome -->
          <q-tab-panel name="fontawesome">
            <div>
              <h4>Fontawesome</h4>
              <p>Font Awesome ist eine Sammlung von Icons, die für die Gestaltung von modernen Webanwendungen verwendet werden können.</p>
            </div>
          </q-tab-panel>

          <!-- Tab Firebase -->
          <q-tab-panel name="firebase">
            <div>
              <h4>Firebase</h4>
              <p>Firebase ist eine Plattform von Google, die Tools und Dienste zur Entwicklung und Bereitstellung von mobilen und Webanwendungen bietet.</p>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const tab = ref('vue');  // Default tab is 'vue'

    return {
      tab,
    };
  },
});
</script>

<style scoped>
/* Optional styles */
</style>
