<script setup lang="ts">
import { FirstTimeModalPreference } from "entities/user-preferences";
import { onMounted, ref } from "vue";

const loading = ref(false);

const preference = ref(new FirstTimeModalPreference());

onMounted(async () => {
  loading.value = true;
  await preference.value.load();
  loading.value = false;
});

const seeTheModal = async () => {
  loading.value = true;
  preference.value.toggleBalancesModal();
  await preference.value.save();
  loading.value = false;
};
</script>

<template>
  <h1>Loading: {{ loading }}</h1>
  <h1>
    Has seen balances modal?
    {{ preference.hasSeenBalancesModal ? "Yes" : "No" }}
  </h1>
  <button :disabled="preference.hasSeenBalancesModal" @click="seeTheModal">
    See
  </button>
</template>
