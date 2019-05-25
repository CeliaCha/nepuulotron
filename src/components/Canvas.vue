<template>
  <div>
    <div id="canvas_container" v-show="!pdf">
      Loading
    </div>
    <div id="canvas_container" v-show="pdf">
      <canvas ref="pdf_renderer"></canvas>
    </div>
  </div>
</template>

<script>
import filePdf from '../data/PlayersGuide_compressed.pdf'
import pdfjs from 'pdfjs-dist'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.worker.js`

export default {
  data () {
    return {
      file: null,
      zoom: 1.4,
      canvasContext: null
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    pdfjs.getDocument(filePdf).then(file => { this.file = file })
  },
  mounted () {
    this.canvas.context = this.$refs['pdf_renderer'].getContext('2d')
  },
  props: [
    'currentPage'
  ],
  watch: {
    pdf: this.renderPdf(),
    currentPage: this.renderPdf()
  },
  methods: {
    renderPdf () {
      this.file.getPage(this.currentPage)
        .then(page => {
          let viewport = page.getViewport(this.zoom)
          this.$refs['pdf_renderer'].width = viewport.width
          this.$refs['pdf_renderer'].height = viewport.height
          page.render({
            canvasContext: this.canvasContext,
            viewport: viewport
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
