<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p.mb-5 La síntesis presentada en la imagen se centra en el papel del modisto y el sastre en la elaboración de prendas de vestir, destacando sus habilidades y responsabilidades esenciales. Para comprender este rol, se analiza la figura humana, se desarrollan y confeccionan prendas, y se modifican para satisfacer las necesidades del cliente. El componente teórico ofrece un recorrido histórico de los conceptos y la terminología, con el objetivo de identificar, clasificar y determinar las características clave de estas profesiones, que son consideradas de alta precisión en la industria de la moda.
  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/sintesis.png", alt="La imagen expone un diagrama de flujo que organiza el contenido en bloques de información. A la izquierda, se describen las tareas relacionadas con la función del modisto o sastre, como comprender al cliente, analizar la figura humana, y confeccionar o modificar prendas. En el centro, se contextualiza el término modisto o sastre, ofreciendo una base teórica que incluye un recorrido histórico de estos roles. Finalmente, a la derecha, se subraya que estas profesiones son de alta precisión en la elaboración de prendas, y se delinean objetivos como identificar, clasificar y determinar las características fundamentales de estas actividades.")
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
