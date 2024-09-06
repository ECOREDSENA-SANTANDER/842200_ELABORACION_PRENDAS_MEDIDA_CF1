<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p.mb-5 xxxxxxxxxxxxxxxxxx.
  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
          //  img(src="@/assets/curso/temas/sintesis.png", alt="La imagen describe un diagrama comparativo que presenta dos enfoques para el trazado de patrones: uno mediante el uso de <i>software</i> de patronaje, como Optitex, y otro mediante el trazo y corte manual. En el lado izquierdo, se detallan las etapas del proceso con el software, desde la personalización del área de trabajo hasta la creación de diferentes modelos de prendas. En el lado derecho, se describen los pasos del proceso manual, desde el reconocimiento de las prendas hasta la terminología industrial relacionada con el trazo y corte.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
  </template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
