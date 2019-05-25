<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <select v-model.number="currentPage" type="number" step="1">
      <option>9</option>
      <option>56</option>
      <option>99</option>
      <option>144</option>
      <option>153</option>
    </select>
    <!-- <input v-model="search" type="text" />
    <div v-for="item in filteredList" :key="item.french">
      <Item :data="item"/>
    </div> -->
    <Canvas :currentPage="currentPage" v-on:getNumPages="setNumPages"/>

  </div>
</template>

<script>
import list from './data/list.json'
// import Item from './components/Item'
import Canvas from './components/Canvas'

export default {
  name: 'app',
  components: { Canvas },
  data () {
    return {
      msg: 'Welcome to the Nepuulotron !',
      list: list,
      search: '',
      numPages: 0,
      currentPage: 1,

    }
  },
  created () {
  },
  computed: {
    filteredList () {
      return this.list.filter(item => {
        const concat = (item.french + item.eng).toLowerCase()
        return concat.includes(this.search.toLowerCase().trim())
      })
    }
  },
  methods: {
    setNumPages (numPages) {
      this.numPages = numPages
      console.log('Nombres de pages : ' + numPages)
    }
  }
}
</script>

<style lang="scss">
  #app {
    color: #080f0b;
  }
</style>
