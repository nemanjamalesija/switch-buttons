<template>
  <div class="SwitchButtons" :style="indicatorPosition">
    <button
      v-for="(option, index) in options"
      :key="option.id"
      :class="[
        'SwitchButtons-btnSwitch',
        {
          'SwitchButtons-btnSwitch--indicatorStart': index === startIndex,
          'is-active': index === computedActiveIndex + startIndex,
        },
      ]"
      type="button"
      @click="setActive(index)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

type Options = {
  id: string | number;
  label: string;
  value: string | number;
}[];

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<Options>,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      startIndex: 1,
    };
  },
  computed: {
    computedActiveIndex: {
      get(this: {
        options: Options;
        modelValue: string | number;
        startIndex: number;
        $emit: (event: string, ...args: [string | number]) => void;
      }): number {
        let modelValue = this.modelValue;

        const matchOption = this.options.find(
          (option) =>
            modelValue === option.id ||
            modelValue === option.label ||
            modelValue === option.value,
        );

        if (matchOption) {
          modelValue = matchOption.value;
          this.$emit("update:modelValue", modelValue);
        }

        const index = this.options.findIndex(
          (option) => option.value === modelValue,
        );

        return index !== -1 ? index - this.startIndex : 0;
      },
      set(newIndex: number) {
        const actualIndex = newIndex + this.startIndex;
        if (actualIndex >= 0 && actualIndex < this.options.length) {
          const selectedOption = this.options[actualIndex];
          if (selectedOption) {
            this.$emit("update:modelValue", selectedOption.value);
          } else {
            console.warn(
              `Switch Buttons: No option found at index ${actualIndex}. Check options and index logic.`,
            );
          }
        }
      },
    },
    indicatorPosition() {
      return {
        "--indicator-position": `${this.computedActiveIndex * 100}%`,
      };
    },
  },
  methods: {
    setActive(index: number) {
      const selectedOption = this.options[index];
      if (selectedOption) {
        this.computedActiveIndex = index - this.startIndex;
        this.$emit("optionClick", selectedOption.value);
      } else {
        console.warn(
          `Switch Buttons: Tried to activate an index (${index}) that doesn't exist in options.`,
        );
      }
    },
  },
});
</script>
<style scoped lang="scss">
$color-gray-alpha: #d1d1d1;
$color-light-alpha: #f1f1f1;
$color-text: #333;

.SwitchButtons {
  display: flex;
  max-width: max-content;
  border: 1px solid $color-gray-alpha;
  border-radius: 9999px;

  &-btnSwitch {
    position: relative;
    width: 150px;
    padding: 8px 20px;
    border: none;
    border-radius: 9999px;
    opacity: 0.5;
    background: transparent;
    transition: opacity 0.3s ease;
    cursor: pointer;
    border: 1px solid transparent;

    &.is-active {
      border: 1px solid $color-gray-alpha;
      opacity: 1;
      background: $color-light-alpha;
    }

    &--indicatorStart {
      z-index: 10;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -10;
        width: 100%;
        height: 100%;
        border: 1px solid $color-text;
        border-radius: 9999px;
        transform: translateX(var(--indicator-position));
        transition: transform 0.3s ease;
      }
    }
  }
}
</style>
