<script lang="ts" setup>

interface FormInputTextProps {
  name: string;
  label: string;
  modelValue: any;
  rules?: string;
  disabled?: boolean;
  hideLabel?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<FormInputTextProps>(), {
  rules: '',
  disabled: false,
  placeholder: ''
})


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
      <input v-bind="$attrs" v-model="value" :disabled="disabled" :placeholder="placeholder"
        @update:model-value="handleChange" @blur="handleBlur"
        class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent" />
      <p class="text-red-500" v-if="errorMessage">{{ errorMessage }}</p>
    </VeeField>

  </div>
</template>

<style lang="scss" scoped>
.form-input-text {}
</style>
