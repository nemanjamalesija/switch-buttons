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
<style scoped lang="scss">
$color-gray-alpha: #d1d1d1; 
$color-light-alpha: #f1f1f1; 
$color-text: #333;

.SwitchButtons {
	display: flex;
	max-width: max-content;
	margin: 0 auto;
	border: 1px solid $color-gray-alpha;
	border-radius: 9999px;

	&-btnSwitch {
		position: relative;
		width: rem(100);
		border: none;
		border-radius: 9999px;
		opacity: 0.5;
		text-transform: lowercase;
		background: transparent;
		transition: opacity 0.3s ease;

		&.is-active {
			border: 1px solid $color-gray-alpha;
			opacity: 1;
			background: $color-light-alpha;
		}

		&--indicatorStart {
			z-index: 10;

			&::before {
				content: '';
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
</style>
