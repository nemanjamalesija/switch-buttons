<script setup lang="ts">
import { ref } from "vue";
import SwitchButtons from "./switch-buttons.vue";

const options = [
  { id: 0, label: "2 days", value: "2-d" },
  { id: 1, label: "15 days", value: "15-d" },
  { id: 2, label: "1 month", value: "1-m" },
  { id: 3, label: "8 months", value: "8-m" },
];

const options2 = [
  { id: 0, label: "Click on add", value: "click-on-add" },
  { id: 1, label: "Contact seller", value: "contact-seller" },
  { id: 2, label: "Send email", value: "send-email" },
];

const options3 = [
  { id: 0, label: "Visits", value: "visits" },
  { id: 1, label: "Interactions", value: "interactions" },
];

const selectedOption = ref("1 month");
const selectedOption2 = ref(1);
const selectedOption3 = ref("Visits");

const valueEmited = ref(false);
const valueEmited2 = ref(false);
const valueEmited3 = ref(false);

function logValueEmited() {
  valueEmited.value = true;
  setTimeout(() => {
    valueEmited.value = false;
  }, 2000);
}

function logValueEmited2() {
  valueEmited2.value = true;
  setTimeout(() => {
    valueEmited2.value = false;
  }, 2000);
}

function logValueEmited3() {
  valueEmited3.value = true;
  setTimeout(() => {
    valueEmited3.value = false;
  }, 2000);
}
</script>

<template>
  <div class="container flex align-center justify-center flex-col">
    <div class="mb-bot-md fixed-w-700">
      <SwitchButtons
        :options="options"
        v-model="selectedOption"
        @optionClick="logValueEmited"
      />
      <div class="flex gap-md">
        <p>
          The <strong>value</strong> of the selected option is:
          <strong>{{ selectedOption }}</strong>
        </p>
        <p v-if="valueEmited">🚀 Event emited from switch buttons!</p>
      </div>
    </div>

    <div class="fixed-w-700 mb-bot-md">
      <SwitchButtons
        :options="options2"
        v-model="selectedOption2"
        @optionClick="logValueEmited2"
      />
      <div class="flex gap-md">
        <p>
          The <strong>value</strong> of the selected option is:
          <strong>{{ selectedOption2 }}</strong>
        </p>
        <p v-if="valueEmited2">🚀 Event emited from switch buttons!</p>
      </div>
    </div>
    <div class="mb-bot-md">
      <SwitchButtons
        :options="options3"
        v-model="selectedOption3"
        @optionClick="logValueEmited3"
      />
      <div class="fixed-w-700 flex gap-md">
        <p>
          The <strong>value</strong> of the selected option is:
          <strong>{{ selectedOption3 }}</strong>
        </p>
        <p v-if="valueEmited3">🚀 Event emited from switch buttons!</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin: 50px auto;
  margin: 0 auto;
  border: 1px solid #999;
  max-width: 1000px;
  padding: 20px 0;
}
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

p {
  color: #333;
}

.mb-bot-md {
  margin-bottom: 30px;
}

.gap-md {
  gap: 20px;
}

.fixed-w-700 {
  width: 700px;
}
</style>
