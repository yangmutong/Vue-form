<template>
  <fieldset class="form-group">
    <validator :name="validation.name">
      <label v-for="f in form" class="checkbox-inline radiobox-inline" :for="f.id">
        <input :type="f.type" :name="f.name" :field="validation.field" :id="f.id" :value="f.value" v-model="value" v-validate="validation.validate">
        {{f.value}}
      </label>
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
      console.log("there is box")
      return {

      }
    },
    props: {
      form: {
        type: Array,
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
