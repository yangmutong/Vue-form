<template>
  <fieldset class="form-group" >
    <select :name="form.name" class="form-control" v-model="form.value" :multiple="form.multiple" :field="form.field">
      <option v-for="option in form.options" :value="option.value">{{option.text}}</option>
    </select>
    <br>
    <span>Selected: {{ form.value | json }}</span>
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
    }
  }
</script>
