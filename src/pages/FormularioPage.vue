<template>
  <q-page class="bg-accent" style="min-height: auto">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="q-pa-md" style="max-width: 800px">
          <h1 class="text-center text-white">Contato</h1>
          <!-- <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Seu nome *"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Preenchimento obrigratório.',
              ]"
            />
            <q-input
              filled
              v-model="email"
              label="E-mail*"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Preenchimento obrigratório.',
              ]"
            />
            <q-input
              filled
              v-model="subject"
              label="Assunto *"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Preenchimento obrigratório.',
              ]"
            />

            <q-input filled v-model="telphone" label="Telefone *" lazy-rules />

            <q-input
              filled
              v-model="text"
              label="Texto *"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Preenchimento obrigratório.',
              ]"
            />

            <div>
              <q-btn label="Enviar Contato" type="submit" color="pink" />
              <q-btn
                label="apagar"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form> -->
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
