<template>
  <fieldset class="form-group" >
    <validator :name="validation.name">
      <select :name="form.name" class="form-control" v-model="value" :multiple="form.multiple" :field="validation.field" :id="form.id" v-validate="validation.validate">
        <option v-for="option in form.options" :value="option.value">{{option.text}}</option>
      </select>
      <br>
      <span>Selected: {{ form.value | json }}</span>
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
