<template>
  <div postshow>
      {{posti}}
  </div>
</template>

<script>

export default {
  name: 'postshow',
  created () {
    var id = this.$route.params.id
    this.$http.get(`/posts/${id}`)
      .then((response) => {
        this.posti = response.data
      })
  },
  data () {
    return {
      posti: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
