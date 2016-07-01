<template>
  <div id="app">
    <validator name="formValidation">
      <form novalidate>
        <test-input></test-input>
      </form>
    </validator>
  </div>
</template>

<script>
import testInput from './components/testInput'

export default {
  components: {
    testInput
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
</style>
