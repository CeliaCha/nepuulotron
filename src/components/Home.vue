<template>
  <div id="home">
    <h1>NEPUULOTRON</h1>
    <input v-model.number="currentPage" type="number" step="1"/>
    <vue-simple-suggest
    ref="searchInput"
    placeholder="Rechercher..."

    v-model="chosen"
    :list="index"
    @select="getResult"
    @focus="clearInput"
    @blur="clearInput"
    >

    </vue-simple-suggest>

  <br>
    <Canvas :currentPage="currentPage" v-on:getNumPages="setNumPages"/>

  </div>
</template>

<script>
import data from '../data/list.json'
// import Item from './Item'
import Canvas from './Canvas'
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS

export default {
  name: 'home',
  components: { Canvas, VueSimpleSuggest },
  mounted () {
    // this.$refs.searchInput.setText('Rechercher...')
    // this.$refs.searchInput.text = 'sdf'
  },
  data () {
    return {
      msg: 'Nepuulotron !',
      data: data,
      search: '',
      numPages: 0,
      currentPage: 3,
      chosen: '',
      result: []
    }
  },
  computed: {
    index () {
      return this.data.map(item => item.eng).concat(this.data.map(item => item.french))
    },
    filteredList () {
      return this.list.filter(item => {
        const concat = (item.french + item.eng).toLowerCase()
        return concat.includes(this.search.toLowerCase().trim())
      })
    }
  },
  methods: {
    setNumPages (numPages) { this.numPages = numPages },
    getResult (selected) {
      this.result = this.data.find(item => item.eng === selected || item.french === selected)
      this.currentPage = parseInt(this.result.engPages.split(', ')[0])
      // this.$refs.searchInput.hideList()
      // // this.$refs.searchInput.hideList()
      // // this.$refs.searchInput.clearSuggestions()
      // this.$refs.searchInput.select('')
      this.$refs.searchInput.setText('bad')
    },
    clearInput () {
      console.log(this.$refs.searchInput.text)
      // this.$refs.searchInput.hideList()
      // this.$refs.searchInput.clearSuggestions()
      this.$refs.searchInput.setText('')
    }
  }
}
</script>

<style lang="scss">
  #home {
    color: #080f0b;
  }
</style>
