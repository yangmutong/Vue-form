<template>
  <div id="app">
      <form novalidate @submit.prevent>
        <div v-for="model in models">
          <component :is="model.type" :form="model.form" :validation="model.validation" :value.sync="model.form.value">

          </component>
        </div>

        <input type="submit" v-on:click="submit" value="Submit" class="btn btn-primary col-md-offset-2s">
      </form>
  </div>
</template>

<script>
import inputComponent from './components/inputComponent'
import selectComponent from './components/selectComponent'
import boxComponent from './components/boxComponent'

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
            value: "test-2",
          },
          validation:{
            name: "test-2",
            field:"test-2",
            validate: {
              required: {rule: true, message: 'Filed required!!'},
              maxlength: {rule: 16, message: 'too long char'}
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
            ],
            value:''
          },
          validation:{
            name: "test-3",
            field:"test-3",
            validate: {
              required: {rule: true, message: 'Filed required!!'}
            }
          }
        },
        {
          type: "box-component",
          form: [
            {
              id: "john",
              type: "checkbox",
              name: "john",
              value: "John"
            },
            {
              id: "mike",
              type: "checkbox",
              name: "mike",
              value: "Mike"
            }
          ],
          validation:{
            name: "box",
            field:"box",
            validate: {

            }
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
            ],
            value:''
          },
          validation:{
            name: "test-4",
            field:"test-4",
            validate: {
              required: {rule: true, message: 'Filed required!!'}
            }
          }
        }
      ]
    }
  },
  methods: {
    submit () {
      this.models.forEach(function(item, index){
        console.log("form name :" + item.form.name)
        console.log("form id :" + item.form.id)
        console.log("form value :" + item.form.value)
      })
    }
  },
  components: {
    inputComponent,
    selectComponent,
    boxComponent
  }

}
</script>

<style>

</style>
