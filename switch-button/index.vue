<template>
	<div class="SwitchButtons" :style="indicatorPosition">
		<Button
			v-for="(option, index) in options"
			:key="option.id"
			variation="gamma"
			:class="[
				'SwitchButtons-btnSwitch',
				{
					'SwitchButtons-btnSwitch--indicatorStart': index === startIndex,
					'is-active': index === computedActiveIndex + startIndex
				}
			]"
			type="button"
			@click="setActive(index)"
		>
			{{ option.label }}
		</Button>
	</div>
</template>
<script>
import Button from 'app/vue/button/index.vue';

export default {
	components: { Button },
	props: {
		options: {
			type: Array,
			required: true
		},
		modelValue: {
			type: [String, Number, Object],
			default: null
		}
	},
	data() {
		return {
			startIndex: 1
		};
	},
	computed: {
		computedActiveIndex: {
			get() {
				const index = this.options.findIndex(
					(option) => this.modelValue === option.value || this.modelValue === option.id
				);
				return index !== -1 ? index - this.startIndex : 0;
			},
			set(newIndex) {
				const actualIndex = newIndex + this.startIndex;
				if (actualIndex >= 0 && actualIndex < this.options.length) {
					const selectedOption = this.options[actualIndex];
					this.$emit('update:modelValue', selectedOption.value);
				}
			}
		},
		indicatorPosition() {
			return {
				'--indicator-position': `${this.computedActiveIndex * 100}%`
			};
		}
	},
	methods: {
		setActive(index) {
			this.computedActiveIndex = index - this.startIndex;
			this.$emit('optionClick', this.options[index].value);
		}
	}
};
</script>
