<template>
  <div detail>
    <div v-for="content in propsdata" v-bind:key="content">
      <tr>
        <td v-for="item in content" v-bind:key="item">
          {{item}}
        </td>
      </tr>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  props: ['propsdata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
