<template>
  <fieldset class="form-group" >
    <validator :name="validation.name">
      <select :name="form.name" class="form-control" v-model="form.value" :multiple="form.multiple" :field="validation.field" :id="form.id" v-validate="validation.validate">
        <option v-for="option in form.options" :value="option.value">{{option.text}}</option>
      </select>
      <br>
      <span>Selected: {{ form.value | json }}</span>
      <pre>{{ getValidation() | json }}</pre>
    </validator>

  </fieldset>
</template>
<style>

</style>
<script>
  export default{
    data () {
      return {

      }
    },
    props: {
      form: {
        type: Object,
        required: true
      },
      validation: {
        type: Object,
        required: true
      }
    },
    methods: {
      onChange () {
        console.log(this)
      },
      getValidation () {
        return this[this.$options._validator]
      }
    }
  }
</script>
