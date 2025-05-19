# Switch Buttons

A component that allows users to toggle between multiple options.

## Props

### `options` (Array)
An array of option objects. Each object must include the following properties:

- **`id`** (String or Number): A unique identifier for the option.
- **`label`** (String): The text displayed in the UI.
- **`value`** (Any): The value emitted when the option is selected.

### `v-model` (Two-way binding)
Binds the selected value to a variable in the parent component. Supports two-way data flow.

## Behavior

- The component emits the value of the selected option to the parent via `v-model`.
- To pre-select an option, initialize `v-model` to either the `id` or `label` of the desired option.

## Example

```vue
<template>
  <SwitchButtons
    v-model="selectedOption"
    :options="[
      { id: 1, label: 'Option A', value: 'a' },
      { id: 2, label: 'Option B', value: 'b' }
    ]"
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedOption = ref('Option A')
// or
const selectedOption = ref(1)
</script>
