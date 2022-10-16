<template>
  <transition name="fade" mode="out-in">
    <q-card>
      <q-card-section>
        <!-- <q-avatar size="103px" class="absolute-center shadow-10">
          <img src="profile.svg" />
        </q-avatar> -->
      </q-card-section>
      <q-card-section>
        <div class="text-center q-pt-lg">
          <div class="col text-h6 ellipsis">Ingresar</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            filled
            v-model="usuario.username"
            label="Usuario"
            lazy-rules
          />

          <q-input
            type="password"
            filled
            v-model="usuario.password"
            label="Contrasenia"
            lazy-rules
          />

          <div>
            <q-btn label="Login" type="button" color="primary" @click="login" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </transition>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
const router = useRouter();

const usuario = new reactive({
  username: "karina",
  password: "karina",
});

const login = async () => {
  await authStore.login(usuario);
  router.push({ name: "index" });
};
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
