/* eslint-disable camelcase */
import { Field, Form, defineRule, configure } from 'vee-validate'
import { localize, } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json';
import ar from '@vee-validate/i18n/dist/locale/ar.json';
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

  configure({
    generateMessage: localize({
      en,
      ar
    }),
  });


  vueApp.component('VeeForm', Form)
  vueApp.component('VeeField', Field)
})

