<template>
  <fieldset class="form-group">
    <label v-if="form.type != 'submit'" :for="form.id" class="col-md-1 control-label">{{form.title}}</label>
    <div class="col-md-4">
      <input class="form-control" :type="form.type" :name="form.name" :field="form.field" :id="form.id" v-model="form.value" v-validate="form.validate">
    </div>
    <span>text input {{form.value}}</span>
  </fieldset>
</template>

<script>
  export default{
    data () {
      console.log("there is select")
      return {
        type: "input-component",
        form: {
          id: "test-1",
          title: "test-1",
          type: "text",
          name: "text",
          value: "test-1",
          field:"test-1",
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

<style scoped>

</style>
