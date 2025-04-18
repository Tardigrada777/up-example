<script lang="ts" setup>
import { WhiteLabel } from "domain";
import { WhiteLabelPreference } from "entities/whilte-label";
import { onMounted, ref } from "vue";

const loading = ref(false);

const whiteLabel = ref(new WhiteLabel());

const preference = ref(new WhiteLabelPreference());

onMounted(async () => {
  loading.value = true;
  await preference.value.load();
  whiteLabel.value = preference.value.whiteLabel;
  loading.value = false;
});

const onUpdate = () => {
  loading.value = true;
  preference.value.whiteLabel = whiteLabel.value;
  preference.value.save();
  loading.value = false;
};
</script>

<template>
  <div>
    <h1>White Label</h1>
    <div>
      <h2>Background color:</h2>
      <input type="text" v-model="whiteLabel.backgroundColor" />
    </div>

    <div>
      <h2>Text color:</h2>
      <input
        type="text"
        :value="whiteLabel.textColor"
        @input="whiteLabel.setTextColor($event.target.value)"
      />
    </div>

    <button :disabled="loading" @click="onUpdate">Update</button>
  </div>
</template>
