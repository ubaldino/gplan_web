<template>
  <component :is="$route.meta.layout ?? 'blank-layout'">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>

  <!--
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.layout || 'blank-layout'">
      <component :is="Component" />
    </transition>
  </router-view>
--></template>

<style>
.route-enter-active,
.route-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.1s ease;
}

.route-enter-from,
.route-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
