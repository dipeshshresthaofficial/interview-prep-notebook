<script setup>
import InterviewPrepPage from "./pages/InterviewPrepPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routePath = window.location.pathname.replace(/\/+$/, "") || "/";
</script>

<template>
  <InterviewPrepPage v-if="routePath === '/'" />
  <NotFoundPage v-else />
</template>
