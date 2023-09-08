<script lang="ts" setup>
import type { FormInputTextProps } from '@/interfaces/Forms'
/**
 *  @description This component to handle  form components [el-input] With VeeValidate
 */
// #region Props

const props = withDefaults(defineProps<FormInputTextProps>(), {
  rules: '',
  disabled: false,
  placeholder: ''
})

// #endregion

// #region Emits
const emit = defineEmits<{ (e: 'update:modelValue', value: any): void }>()
// #endregion

// #region Computed
const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue: any) {
    emit('update:modelValue', newValue)
  }
})

</script>

<template>
  <div class="form-input-text vee-field field">
    <VeeField v-slot="{ handleChange, errorMessage, handleBlur }" v-model="value" :name="name" :label="label"
      :rules="rules">
      <label :for="email" class="text-sm leading-7">{{ label }}</label>
      <input v-bind="$attrs" :model-value="value" :disabled="disabled" :placeholder="placeholder"
        @update:model-value="handleChange" @blur="handleBlur">
      </input>
      <p class="text-red-500" v-if="errorMessage"> {{ errorMessage }}</p>
    </VeeField>
  </div>
</template>

<style lang="scss" scoped>
.form-input-text {}
</style>
