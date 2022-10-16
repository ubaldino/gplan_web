<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <!--
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
            </q-avatar>
            Title
          </q-toolbar-title>
        </q-toolbar>6
      -->

      <q-tabs align="left">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-route-tab to="/" label="Inicio" />

        <q-route-tab
          v-for="menu in menusStore.menus"
          :to="menu.path"
          :label="menu.fullName"
          @click="selectSubMenu(menu)"
        />

        <q-route-tab to="/login" label="Login" />
        <q-tab label="Logout" @click="logout" />
        <!--
         -->
      </q-tabs>
    </q-header>

    <q-drawer
      show-if-above
      v-model="menusStore.leftDrawerOpen"
      side="left"
      elevated
    >
      <q-list>
        <q-item
          v-for="(subMenu, index) in menusStore.subMenus"
          :to="subMenu.path"
          :label="subMenu.name"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon :name="subMenu.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ subMenu.fullName }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import { useMenusStore } from "../stores/menusStore";

import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const auth = useAuthStore();
const router = useRouter();

const menusStore = useMenusStore();

onBeforeMount(() => {});

const toggleLeftDrawer = () => {
  menusStore.setLeftDrawer(!menusStore.leftDrawerOpen);
};

const selectSubMenu = (menu) => {};

const logout = () => {
  auth.logout().then(() => router.push({ name: "login", replace: true }));
};
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>
