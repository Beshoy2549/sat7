/* eslint-disable camelcase */
import { Field, Form, defineRule } from 'vee-validate'

import {
  email,
  min,
  required,
  url,
  confirmed,
  min_value,
  max_value,
  numeric
} from '@vee-validate/rules'

export default defineNuxtPlugin(({ $i18n, vueApp }) => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)
  defineRule('url', url)
  defineRule('confirmed', confirmed)
  defineRule('min_value', min_value)
  defineRule('max_value', max_value)
  defineRule('numeric', numeric)
  vueApp.component('VeeForm', Form)
  vueApp.component('VeeField', Field)
})
