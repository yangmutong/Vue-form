<template>
  <fieldset class="form-group" >
    <select :name="form.name" class="form-control" v-model="form.value" :multiple="form.multiple" :field="form.field" v-validate="validation">
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
      console.log("there is select")
      return {
        type: "select-component",
        form: {
          id: "test-3",
          title: "selected",
          multiple: false,
          options: [
            {value: "mike", text: "Mike"},
            {value: "john", text: "John"},
            {value: "jenny", text: "Jenny"}
          ]
        },
        validation: {

        }
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
