<template>
  <div>
      <p>
        <label for="subtitle">Sous-titre :</label>
        <input v-model="subtitle" id="subtitle" type="text"/>
        <button @click="addElement" id="addSubtitle">Ajouter</button>
      </p>
      <p>
        <label for="normalText">Texte normal :</label>
        <textarea v-model="normalText" id="normalText" type="text"/>
        <button @click="addElement" id="addNormalText">Ajouter</button>
      </p>
      <p><button @click="addElement" id="addLineBreak">Ajouter saut de ligne</button></p>
      <h2>Résultat :</h2>
      <ul>
        <li v-for="(string, index) in strings" :key="index">{{string.type}} <span v-if="string.content">: {{ string.content }}</span></li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'AddString',
  // props: [
  //   'subStrings'
  // ],
  data () {
    return {
      strings: '',
      subtitle: '',
      normalText: '',
    }
  },
  methods: {
    addElement (e) {
      let object = {}
      switch (e.target.id) {
      case 'addSubtitle' :
        object.type = 'Sous-titre'
        object.content = this.subtitle
        this.strings.push(object)
        this.subtitle = ''
        break
      case 'addNormalText' :
        object.type = 'Texte normal'
        object.content = this.normalText
        this.strings.push(object)
        this.normalText = ''
        break
      case 'addLineBreak' :
        object.type = 'Saut de ligne'
        object.content = null
        this.strings.push(object)
      }
    },
  },
  watch: {
    strings: {
      handler () {
        console.log('Strings added !')
        this.$emit('add-string', this.strings)
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss">

</style>
