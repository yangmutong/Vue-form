<template>
  <fieldset class="form-group">
    <validator :name="validation.name">
      <label v-if="form.type != 'submit'" :for="form.id" class="col-md-1 control-label">{{form.title}}</label>
      <div class="col-md-4">
        <input v-on:input="onChange" class="form-control" :type="form.type" :name="form.name" :field="validation.field" :id="form.id" v-model="form.value" v-validate="validation.validate">
      </div>
      <span>text input {{form.value}}</span>
      <pre>{{ getValidation() | json }}</pre>
      <div class="errors">
        <p v-if="$validation1.username.required">Required your name.</p>
        <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
      </div>
    </validator>
  </fieldset>
</template>

<script>
  export default{
    data () {
      console.log("there is input")
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

<style scoped>

</style>
