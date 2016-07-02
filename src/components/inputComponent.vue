<template>
  <fieldset class="form-group">
    <validator :name="validation.name">
      <label v-if="form.type != 'submit'" :for="form.id" class="col-md-1 control-label">{{form.title}}</label>
      <div class="col-md-4">
        <input v-on:input="onChange" class="form-control" :type="form.type" :name="form.name" :field="validation.field" :id="form.id" v-model="value" v-validate="validation.validate">
      </div>
      <span>text input {{form.value}}</span>
      <div class="errors">
        <div v-if="getValidation().valid">合法</div>
        <div v-if="getValidation().invalid">非法
          <div v-for="(index, val) in getErrorMessage()">
            <span >{{ val.validator }} : {{ val.message }}</span>
          </div>
        </div>
      </div>
    </validator>
  </fieldset>
  <hr>
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
      },
      value: {
        required: true
      }
    },
    methods: {
      onChange () {
        console.log(this)
      },
      getValidation () {
        return this[this.$options._validator]
      },
      getErrorMessage () {
        return this.getValidation().errors
      }
    }
  }
</script>

<style scoped>

</style>
