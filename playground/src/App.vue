<script setup lang="ts">
import { ref } from "vue";
// @ts-expect-error // TODO: add import alias
import SwitchButtons from "../../switch-button/index.vue";

const options = [
  { id: 1, label: "2 days", value: "2 days" },
  { id: 2, label: "15 days", value: "15 days" },
  { id: 3, label: "1 month", value: "1 month" },
  { id: 4, label: "3 months", value: "3 months" },
];

const selectedPeriod = ref("1 month");
const selectedPeriod2 = ref("15 days");
</script>

<template>
  <div class="mb-bot-md">
    <SwitchButtons :options="options" v-model="selectedPeriod" />
    <p>
      Selected option 1 is: <strong>{{ selectedPeriod }}</strong>
    </p>
  </div>
  <SwitchButtons :options="options" v-model="selectedPeriod2" />

  <p>
    Selected option 2 is: <strong>{{ selectedPeriod2 }}</strong>
  </p>
</template>
<style scoped>
p {
  color: #333;
}

.mb-bot-md {
  margin-bottom: 20px;
}
</style>
