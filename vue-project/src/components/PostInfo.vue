<template>
  <div postinfo>
    <h2>게시글 상세</h2>
        <table>
            <tr>
                <td>{{posti[0]}}</td>
                <td>{{posti[1]}}</td>
            </tr>
        </table>
  </div>
</template>

<script>

export default {
  name: 'postinfo',
  created () {
    this.$http.get('/posts/postinfo')
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
