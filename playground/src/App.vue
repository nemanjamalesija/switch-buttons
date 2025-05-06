<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import SwitchButtons from '../../switch-button/index.vue'


const options = [
  { id: 1, label: '2 days', value: '2 days' },
  { id: 2, label: '15 days', value: '15 days' },
  { id: 3, label: '1 month', value: '1 month' },
  { id: 4, label: '3 months', value: '3 months' }
]

const selectedDurationLabel = ref('1 month')
</script>

<template>
  <SwitchButtons :options="options" v-model="selectedDurationLabel" />
</template>

