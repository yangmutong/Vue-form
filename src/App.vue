<template>
  <div id="app">
    <validator name="inputValidation">
      <form novalidate @submit.prevent>
        <div v-for="model in models">
          <component :is="model.type" :form="model.form" :validation="model.validation">

          </component>
        </div>
        <pre>{{$inputValidation | json}}</pre>
      </form>
    </validator>
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
            value: "test-1",
            field: "test-1",
            validate: { required: true, maxlength: 16 }
          },
          validation:{
            required: {
              value: true,
              message: "This field is required!"
            },
            maxlength: {
              value:6,
              message: "6 char at most!"
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
            value: "test-2",
            field: "test-2"
          },
          validation:{
            required: {
              value: true,
              message: "This field is required!"
            },
            maxlength: {
              value:6,
              message: "6 char at most!"
            }
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
          validation: {

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
          validation: {

          }
        },
        {
          type: "input-component",
          form: {
            id: "submit",
            title: "submit",
            type: "submit",
            name: "submit",
            value: "submit",
            field: "submit"
          },
          validation: {

          }
        }
      ]
    }
  },
  created () {
    console.log(this)
  },
  components: {
    inputComponent,
    selectComponent
  }

}
</script>

<style>

</style>
