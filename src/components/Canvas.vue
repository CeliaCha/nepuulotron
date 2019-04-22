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
  props: [ 'currentPage' ],
  data () {
    return {
      pdf: null,
      zoom: 1.4,
      canvas: {
        context: null
      }
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    pdfjs.getDocument(filePdf)
      .then(pdf => {
        this.pdf = pdf
      })
  },
  mounted () {
    this.canvas.context = this.$refs['pdf_renderer'].getContext('2d')
  },
  watch: {
    pdf: function () {
      this.renderPdfPage()
    },
    currentPage: function () {
      this.renderPdfPage()
    }
  },
  methods: {
    renderPdfPage () {
      this.pdf.getPage(this.currentPage)
        .then(page => {
          let viewport = page.getViewport(this.zoom)
          this.$refs['pdf_renderer'].width = viewport.width
          this.$refs['pdf_renderer'].height = viewport.height
          page.render({
            canvasContext: this.canvas.context,
            viewport: viewport
          })
        })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
