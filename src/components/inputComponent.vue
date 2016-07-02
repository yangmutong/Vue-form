<template>
  <fieldset class="form-group">
    <label v-if="form.type != 'submit'" :for="form.id" class="col-md-1 control-label">{{form.title}}</label>
    <div class="col-md-4">
      <input class="form-control" :type="form.type" :name="form.name" :field="form.field" :id="form.id" v-model="form.value">
    </div>
    <span>text input {{form.value}}</span>
  </fieldset>
</template>

<script>
  export default{
    data () {
      console.log("there is select")
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

<style scoped>

</style>
