<template>
  <div iken>
    <h1>IKEN Component</h1>
    <h2>{{ writes }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Iken',
  created () {
    this.$http.get('/posts')
      .then(response => {
        this.writes = response.data
      })
  },
  data () {
    return {
      writes: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
