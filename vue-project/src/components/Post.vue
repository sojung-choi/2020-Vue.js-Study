<template>
  <div post>
    <h3>게시글 목록</h3>
    <table>
    <!--<div v-for="content in board" v-bind:key="content">
         <detail v-bind:propsdata="content"></detail>
    </div>-->
      <detail v-bind:propsdata="board"></detail>
    </table>
    <br/>
    <button v-on:click="onClick">(Post.vue)Click me!</button>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script>
import Detail from '@/components/Detail'

export default {
  name: 'Post',
  methods: {
    onClick: function () { alert('method 예제') }
  },
  created () {
    this.$http.get('/posts')
      .then((response) => {
        this.board = response.data
      })
  },
  data () {
    return {
      board: []
    }
  },
  components: {
    Detail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
table{
  width:60%;
  margin:auto;
  text-align: center;
}
</style>
