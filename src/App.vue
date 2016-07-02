<template>
  <div id="app">
      <form novalidate @submit.prevent>
        <div v-for="model in models">
          <component :is="model.type" :form="model.form" :validation="model.validation">

          </component>
        </div>
      </form>
  </div>
</template>

<script>
import inputComponent from './components/inputComponent'
import selectComponent from './components/selectComponent'

export default {
  data() {
    return {
      models:[
        {
          type: "input-component",
          form: {
            id: "test-1",
            title: "test-1",
            type: "text",
            name: "text",
            value: "test-1"
          },
          validation: {
            name: "test-1",
            field: "test-1",
            validate: {
              required: {rule: true, message: 'Filed required!!'},
              maxlength: {rule: 8, message: 'too long char'}
            }
          }
        },
        {
          type: "input-component",
          form:{
            id: "test-2",
            title: "test-2",
            type: "number",
            name: "number",
            value: "test-2"
          },
          validation:{
            name: "test-2",
            field:"test-2",
            validate: { required: true, maxlength: 16}
          }
        },
        {
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
          validation:{
            name: "test-3",
            field:"test-3",
            validate: { required: true}
          }
        },
        {
          type: "select-component",
          form: {
            id: "test-4",
            title: "selected",
            multiple: true,
            options: [
              {value: "mike", text: "Mike"},
              {value: "john", text: "John"},
              {value: "jenny", text: "Jenny"}
            ]
          },
          validation:{
            name: "test-4",
            field:"test-4",
            validate: { required: true}
          }
        },
        {
          type: "input-component",
          form: {
            id: "submit",
            title: "submit",
            type: "submit",
            name: "submit",
            value: "submit"
          },
          validation:{
            name: "submit",
            field:"submit",
            validate: { required: true, maxlength: 16}
          }
        }
      ]
    }
  },
  components: {
    inputComponent,
    selectComponent
  }

}
</script>

<style>

</style>
