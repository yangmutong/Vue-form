<template>
  <fieldset class="form-group">
    <label :for="data.id" class="col-md-1 control-label">{{data.title}}</label>
    <div class="col-md-4">
      <input class="form-control" :type="data.type" :name="data.name" :id="data.id" v-model="data.value">
    </div>
    <span>text input {{data.value}}</span>
  </fieldset>
</template>

<script>
  export default{
    data () {
      return {
        data:{
          id: "text",
          title: "text",
          type: "text",
          name: "text",
          value: "text"
        }
      }
    }
  }
</script>

<style scoped>

</style>
